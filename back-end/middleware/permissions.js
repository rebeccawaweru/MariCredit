const mongoose = require('mongoose')
const User = require('../models/User')
const { UnauthenticatedError} = require('../errors')

const permissionMiddleware = async (req,res,next) =>{
  const {user:userId} = req.params
  const user = await User.findById({_id:userId})
  if(!user){
    throw new UnauthenticatedError('You do not have enough permission to access the resource')
  }
  next()
}


module.exports = permissionMiddleware