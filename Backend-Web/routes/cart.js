const express = require('express')
const { addToCart, fetchCartByUser, UpdateCart, deleteFromCart } = require('../controller/cart');


const router = express.Router();

router.post('/', addToCart)
.get('/',fetchCartByUser)
.patch('/:id',UpdateCart)
.delete('/:id',deleteFromCart)

exports.router = router