const {Product} = require("../models/Product")

exports.createProduct = async function (req , res){
    const product = new Product(req.body);
    
    

    try{
        const doc = await product.save();
        res.status(201).json(doc)
        console.log(doc)
    }
    catch(err){
        res.status(400).json(err)
    }

}
exports.fetchAllProducts =    async function (req , res){
    
    let query  = Product.find({});
    let totalProductsQuery  = Product.find({});
    if(req.query.category){
        query= query.find({category:req.query.category})
        totalProductsQuery= totalProductsQuery.find({category:req.query.category})

    }
    if(req.query.brand){
        query=query.find({brand:req.query.brand})
        totalProductsQuery=totalProductsQuery.find({brand:req.query.brand})
    }

    if(req.query._sort && req.query._order){
        query=query.sort({[req.query._sort]:req.query._order})
        
    }


    const totalDocs = await totalProductsQuery.count().exec();
    console.log({totalDocs})

    if (req.query._page && req.query._limit) {
        const page = parseInt(req.query._page, 10) || 1; // Ensure valid page number (default to 1)
        const pageSize = parseInt(req.query._limit, 10) || 10; // Ensure valid page size (default to 10)
        const skip = pageSize * (page - 1); // Calculate correct skip value
    
        query = query.skip(skip).limit(pageSize);
      }

    try{
        const doc = await query.exec();
        res.set('X-Total-Count', totalDocs)
        res.status(200).json(doc)
        
    }
    catch(err){
        res.status(400).json(err)
    }

}



exports.fetchProductById = async function(req,res){

    const {id}=req.params;
    try {
        const products= await Product.findById(id)
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error)
    }

}
exports.UpdateProducts = async function(req,res){

    const {id}=req.params;
    try {
        const products= await Product.findByIdAndUpdate(id  ,req.body,{new:true}  )
        res.status(200).json(products);



    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }

}










