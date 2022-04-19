const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:[true, 'name is required'],
    },
    phonenumber:{
        type:Number,
        trim:true,
        required:[true, 'phonenumber is required'],
        unique:true
    },
    email:{
        type: String,
        required:[true, 'Please provide your email'],
        unique:true,   
    },
    password:{
        type:String,
        required:[true, 'Please provide password'],
        minlength:6,
    },
    userType:{
        type:String,
        enum: ['staff', 'user'],
        default:"user"
    },
    status:{
      type:Boolean,
      default:"true"
    },
    resetToken:{
       type:String, 
    },
    avatar:{
        type:String
        
    }
})
// userSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt(10);
//     this.password= await bcrypt.hash(this.password,salt)
//     next()
// })
// userSchema.methods.createJWT = function (){
//     return jwt.sign({userId:this._id,name:this.firstname}, 'jwtSecret',{expiresIn:'30d'})
// }
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
     return isMatch
}
module.exports = mongoose.model('User', userSchema)

