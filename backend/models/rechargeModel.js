import mongoose from 'mongoose'

const rechargeSchema = mongoose.Schema({

      userid: { type: String, required: true },
      rechargeAmount: {
            type: Number,
            required: true
      },
      paymentMethod: {
            type: String,
            required: true
      },

}, {
      timestamps: true
})

const Recharge = mongoose.model('Recharge', rechargeSchema)

export default Recharge