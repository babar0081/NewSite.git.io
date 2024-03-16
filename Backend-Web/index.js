const express = require('express')
const server = express();
const mongoose = require('mongoose')
const productsRouter = require('./routes/Product.routes.js')
const CategoriesRouter = require('./routes/Category.routes.js')
const BrandsRouter = require('./routes/Brands.routes.js')
const userRouter = require('./routes/User.js')
const authRouter = require('./routes/Auth.js')
const cartRouter = require('./routes/cart.js')
const orderRouter = require('./routes/Order.js')
const cors = require('cors')

// middlewears
server.use(cors({
exposedHeaders:['X-TOTAL-COUNT']
}))

server.use(express.json());
server.use('/products', productsRouter.router)
server.use('/categories', CategoriesRouter.router)
server.use('/brands', BrandsRouter.router)
server.use('/user', userRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', orderRouter.router)

main().catch(err=> console.log(err))
async function main() {
 await mongoose.connect('mongodb://localhost:27017/test');
    console.log('database connected')
}


server.get('/',(req, res)=>{
    res.json({status:"succes"})
})


server.listen(8080,()=>{
    console.log("server started")
})


