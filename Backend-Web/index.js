const express = require('express')
const server = express();
const mongoose = require('mongoose')

const createProduct = require('./controller/Product.js');




server.use(express.json());
main().catch(err=> console.log(err))
async function main() {
 await mongoose.connect('mongodb://localhost:27017/test');
    console.log('database connected')
}


server.get('/',(req, res)=>{
    res.json({status:"succes"})
})

// server.post('/products', createProduct());
server.post('/products', createProduct);

  


server.listen(8080,()=>{
    console.log("server started")
})


