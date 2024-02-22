// const express = require('express')


// const { fetchCategories, createCategory } = require('../controller/Catergory');


// const router = express.Router();


// router.post('/', createCategory).get('/',fetchCategories)


// exports.router = router



const express = require('express')

const { fetchCategories, createCategory } = require('../controller/Catergory');


const router = express.Router();

router.get('/',fetchCategories).post('/',createCategory);

exports.router = router