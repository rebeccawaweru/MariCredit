const Payment = require('../models/Payment')
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')

const getpayments = async(req,res)=>{
    const payment = await Payment.find({})
    res.status(200).json({payment})
}
const getpayment = async(req,res)=>{
    const {id:paymentId} = req.params;
    const payment = await Payment.findById({_id:paymentId})
    if(!payment){
        throw new NotFoundError('payment not found')
    }
    res.status(200).json({payment})
}

const mypayments = async(req,res)=>{
    const {user:userId} = req.params;
    const payment = await Payment.find({userId:userId})
    if(!payment){
        throw new NotFoundError('You have not made any payments')
    }
    res.status(200).json({payment})
}
const creatpayment = async(req,res) =>{
    const payment = await Payment.create(req.body)
    res.status(200).json({payment})
}
const updatepayment = async(req,res)=>{
    const {id:paymentId} = req.params;
    const payment = await Payment.findByIdAndUpdate({_id:paymentId},req.body,{
        new:true,
        runValidators:true,
    })
    if(!payment){
        throw new BadRequestError('Select payment to update')
    }
    res.status(200).json({msg:'payment updated'})
}
const deletepayment = async(req,res)=>{
    const {id:paymentId} = req.params
    const payment = await Payment.findByIdAndDelete({_id:paymentId})
    if(!payment){
        throw new BadRequestError('Select payment to delete')
    }
    res.status(200).json({msg:'payment deleted'})
}

module.exports = {
getpayments,
getpayment,
mypayments,
creatpayment,
updatepayment,
deletepayment
}