const {Product} = require("../models/Product")

async function createProduct(req , res){
    const product = new Product(req.body);
    const response = await product.save();
    console.log(response);

    

}





module.exports = createProduct