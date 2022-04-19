const Product = require('../models/Product')
const {BadRequestError, UnauthenticatedError, NotFoundError, CustomAPIError} = require('../errors')
const { StatusCodes } = require('http-status-codes');

//loanproducts
const newProduct = async(req,res)=>{
    const product = await Product.create(req.body)
    res.status(201).json('New Product added')
}
const getAllProducts = async(req,res)=>{
    const products = await Product.find({})
    res.status(200).json({products})
}
const getProduct = async(req,res)=>{
    // const {id:productId, user:userId} = req.params
    const {id:productId} = req.params
    const product = await Product.findById({_id:productId})
    if(!product){
    throw new NotFoundError('Product does not exist')
    }
    res.status(200).json({product})
}
const updateProduct = async(req,res)=>{
    const {id:productId} = req.params
    const product = await Product.findByIdAndUpdate({_id:productId},req.body,
    {new:true,
    runValidators:true,
    })
    res.status(200).json({msg:'Product Updated'})
    if(!product){
     throw new BadRequestError('No product to update')
    }
}
const deleteProduct = async(req,res)=>{
    const {id:productId} = req.params
    const product = await Product.findByIdAndDelete({_id:productId})
    if(!product){
        throw new BadRequestError('No product to delete')
    }
    res.status(200).json({msg:'Product deleted'})
}
const findInterest = async(req,res)=>{
    const {name:productname} = req.params
    const product = await Product.findOne({name:productname})

    res.status(200).json({product})

}
module.exports = {
    findInterest,
    newProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}