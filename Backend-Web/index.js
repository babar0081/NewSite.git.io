const express = require('express')
const server = express();
const mongoose = require('mongoose')
const productsRouter = require('./routes/Product.routes.js')
const CategoriesRouter = require('./routes/Category.routes.js.js')
const BrandsRouter = require('./routes/Brands.routes.js.js')
const createProduct = require('./controller/Product.js');



// middlewears


server.use(express.json());
server.use('/products', productsRouter.router)
server.use('/categoriies', CategoriesRouter.router)
server.use('/products', BrandsRouter.router)

main().catch(err=> console.log(err))
async function main() {
 await mongoose.connect('mongodb://localhost:27017/test');
    console.log('database connected')
}


server.get('/',(req, res)=>{
    res.json({status:"succes"})
})

// server.post('/products', createProduct());


  


server.listen(8080,()=>{
    console.log("server started")
})


