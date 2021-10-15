import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({

    fname:{
        type:String,
        requied:true
    },
    lname:{
        type:String,
        requied:true
    },
    email:{
        type:String,
        requied:true,
        unique:true
    },
    phoneNo:{
        type:Number,
        requied:true
    },
    password:{
        type: String,
        requied:true
    },
    image:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        requied:true,
        default:false
    }
}, {
    timeStamps: true
    }
)

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User