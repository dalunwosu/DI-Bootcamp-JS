const express = require('express')
const router = express.Router()

const {_getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
} = require('../controllers/product.js')



router.get('/products', _getAllProducts)
router.get('/products/:id', _getProduct)
router.get('/search', _searchProduct)
router.post('/products', _insertProduct)
router.delete('/products/:id', _deleteProduct)
router.put('/products/:id', _updateProduct)

module.exports= {
    router
}