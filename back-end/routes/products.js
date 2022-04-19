const express = require('express')
const router = express.Router()
const permissionMiddleware = require('../middleware/permissions')
const {
findInterest,
getProduct, 
getAllProducts,
updateProduct,
deleteProduct,
newProduct} = require('../controllers/products')

router.get('/interest/:name', findInterest)
router.route('/').get(getAllProducts)

router.post('/:user', permissionMiddleware, newProduct)
router.get('/:id/:user', permissionMiddleware, getProduct)
router.put('/:id/:user', permissionMiddleware, updateProduct)
router.delete('/:id/:user', permissionMiddleware, deleteProduct)

// router.route('/:id/:user', permissionMiddleware).post(newProduct).get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router