const express = require('express')
const {createProduct,fetchAllProducts, fetchProductById, UpdateProducts}=require('../controller/Product');


const router = express.Router();

router.post('/', createProduct).get('/',fetchAllProducts).get('/:id',fetchProductById).patch('/:id',UpdateProducts)

exports.router = router