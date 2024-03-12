const express = require('express');
const { fetchOrderByUser, createOrder, deleteOrder, UpdateOrder } = require('../controller/Order');



const router = express.Router();

router.post('/', createOrder)
.get('/',fetchOrderByUser)
.patch('/:id',UpdateOrder)
.delete('/:id',deleteOrder)

exports.router = router