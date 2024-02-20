const express = require('express')


const { fetchCategories } = require('../controller/Catergory');


const router = express.Router();

router.get('/',fetchCategories)

exports.router = router