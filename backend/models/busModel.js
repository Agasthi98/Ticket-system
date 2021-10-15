import mongoose from 'mongoose'

const busSchema = mongoose.Schema({
      user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

      busId: {
            type: String,
            required: true
      },
      busStation: {
            type: String,
            required: true
      },
      price: {
            type: Number,
      
      }

}, {
      timestamps: true
})

const Bus = mongoose.model('Bus', busSchema)

export default Bus