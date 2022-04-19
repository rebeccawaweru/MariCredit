const mongoose = require('mongoose')

const loanSchema = mongoose.Schema({
   fullname:{
        type:String,
        required:true,
        trim:true,
    },
    phonenumber:{
        type:Number,
        required:true,
        trim:true,
    },
    idnumber:{
        type:Number,
        required:true,
        trim:true,
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
    },
    rate:{
        type:Number,
        required:true,
    },
    interest:{
        type:Number,
        required:true,
    },
    finalAmount:{
        type:Number,
        required:true,
    },
    request:{
        type:String,
        // enum: ['approved', 'rejected', 'pending'],
        default:"pending",
        trim:true,
    },
    status:{
       type:Boolean,
       default:false,
       trim:true,
    },
    requestedOn:{
      type:Date,
      default:Date.now(),
      trim:true,
    },
   period:{
      type:String,
      required:true,
      trim:true,
    },
 tenature:{
      type:Number,
      required:true,
      trim:true,
    },
    product: {
        type:String,
        trim:true,
    },
    handledBy: {
        type:String,
        trim:true,
    },
    job:{
        type:String,
        trim:true,
        required:true
    },
   emergency1: {
        type:Number,
        trim:true,
        required:true
    },
    emergency2: {
        type:Number,
        trim:true,
        required:true
    },
    frontavatar:{
        type:String,
    },
    backavatar:{
        type:String,
    }

})

module.exports = mongoose.model('Loan', loanSchema)