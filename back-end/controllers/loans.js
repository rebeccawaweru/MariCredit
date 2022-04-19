const Loan = require('../models/Loan')
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')

const getloans = async(req,res)=>{
    const loan = await Loan.find({})
    res.status(200).json({loan})
}
const getloan = async(req,res)=>{
    const {id:loanId} = req.params;
    const loan = await Loan.findById({_id:loanId})
    if(!loan){
        throw new NotFoundError('loan not found')
    }
    res.status(200).json({loan})
}
//whether loan is pending, approved or rejected
const loanrequest = async(req,res)=>{
    const {request:request} = req.params
    const loan = await Loan.find({request:request})
    res.status(200).json({loan})
}
const myloans = async(req,res)=>{
    const {user:userId} = req.params;
    const loan = await Loan.find({requestedBy:userId})
    if(!loan){
        throw new NotFoundError('You do not have any loans')
    }
    res.status(200).json({loan})
}
const creatloan = async(req,res) =>{
    const loan = await Loan.create(req.body)
    res.status(200).json({loan})
}
const updateloan = async(req,res)=>{
    const {id:loanId} = req.params;
    const loan = await Loan.findByIdAndUpdate({_id:loanId},req.body,{
        new:true,
        runValidators:true,
    })
    if(!loan){
        throw new BadRequestError('Select loan to update')
    }
    res.status(200).json({msg:'Loan updated'})
}
const deleteloan = async(req,res)=>{
    const {id:loanId} = req.params
    const loan = await Loan.findByIdAndDelete({_id:loanId})
    if(!loan){
        throw new BadRequestError('Select loan to delete')
    }
    res.status(200).json({msg:'Loan deleted'})
}
const getUserloans = async(req,res)=>{
    const {phone:phonenumber} = req.params
    const loan = await Loan.find({phonenumber:phonenumber})
    res.json({loan})
}



const loan = async(req,res)=>{
    res.json('heey')
}


module.exports = {
loan,
getloans,
getloan,
myloans,
creatloan,
updateloan,
loanrequest,
deleteloan,
getUserloans
}