const express = require('express')

const { UpdateUser, fetchUserById } = require('../controller/User');


const router = express.Router();

router.get('/:id',fetchUserById).patch('/:id',UpdateUser)

exports.router = router