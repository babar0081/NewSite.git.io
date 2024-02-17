const express = require('express')
const server = express();
const mongoose = require('mongoose')

const createProduct = require('./controller/Product.js');

// middlewears


server.use(express.json());
main().catch(err=> console.log(err))
async function main() {


    
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('database connected')
}


server.get('/',(req, res)=>{
    res.json({status:"succes"})
})

server.post('/products', async (req, res) => {
    try {        
      await createProduct(req.body);
      res.json({ message: "Product created successfully!" });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating product!" });
    }
  });
  

server.listen(8080,()=>{
    console.log("server started")
})