import asyncHandler from 'express-async-handler'
import Recharge from '../models/rechargeModel.js'
import { v4 as uuidv4 } from 'uuid'
import Stripe from 'stripe';


const stripe = new Stripe('sk_test_51JPWGjSI37Hyu4LSE4vX93j1azAOjpcgYNLvdh9avZuqoUElA7PO2w8xquKa0Z4yt8Ad1lEdRMH4HRxiicAW3Gyc00IVYrwUME');


const addRecharge = asyncHandler(async (req, res) => {

      const { userid, rechargeAmount, paymentMethod, token } = req.body

      try {
            const customer = await stripe.customers.create({
                  email: token.email,
                  source: token.id,
            })

            console.log(customer.id);

            const payment = await stripe.charges.create(
                  {
                        amount: rechargeAmount * 100,
                        currency: "inr",
                        customer: customer.id,
                        receipt_email: token.email,
                  },
                  {
                        idempotencyKey: uuidv4(),
                  }
            );

            if (payment) {
                  try {
                        const newRecharge = new Recharge({
                              userid,
                              rechargeAmount: rechargeAmount,
                              paymentMethod: paymentMethod

                        })

                        await newRecharge.save()

                        res.send("Account Recharged Successfully")
                  } catch (error) {
                        console.log(error)
                        return res.status(400).json({ message: error })
                  }
            } else {
                  res.send("Payment Failed")
            }
      } catch (error) {
            return res.status(400).json({ message: "Something went wrong" + error });
      }

})


const getUserRecharges = asyncHandler(async (req, res) => {
      const { userid } = req.body

      try {
            const recharges = await Recharge.find({ userid: userid }).sort({ _id: -1 })
            res.send(recharges)
            // const tot = recharges.reduce((acc, recharges) => acc + recharges.rechargeAmount, 0)
            // console.log(tot)
      } catch (error) {
            return res.status(400).json({ message: "Error" })
      }
})



export { addRecharge, getUserRecharges }