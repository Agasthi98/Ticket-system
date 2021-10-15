import asyncHandler from 'express-async-handler'
import Bus from '../models/busModel.js'

const insertBus = asyncHandler(async (req, res) => {

    const { busId, busStation, price } = req.body


    const newBus = new Bus({
        user:req.user._id,
        busId,
        busStation,
        price,
    })
    
    try {
          await newBus.save()
          res.send('New bus added')
    } catch (error) {
          return res.status(400).json({ error });
    }
})

export { insertBus }