const express = require('express')
const server = express();
const mongoose = require('mongoose')
const productsRouter = require('./routes/Product.routes.js')
const CategoriesRouter = require('./routes/Category.routes.js')
const BrandsRouter = require('./routes/Brands.routes.js')
const createProduct = require('./controller/Product.js');
const cors = require('cors')


// middlewears
server.use(cors({
exposedHeaders:['X-TOTAL-COUNT']
}))

server.use(express.json());
server.use('/products', productsRouter.router)
server.use('/categories', CategoriesRouter.router)
server.use('/brands', BrandsRouter.router)

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


