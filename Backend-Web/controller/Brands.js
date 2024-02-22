const { Brand } = require("../models/Brand")

exports.createBrand = async function (req , res){
    const brand = new Brand(req.body);
    
    

    try{
        const doc = await brand.save();
        res.status(201).json(doc)
        
    }
    catch(err){
        res.status(400).json(err)
    }

}

exports.fetchBrands =    async function (req , res){
try {
    const brands = await Brand.find({}).exec();
res.status(200).json(brands);

} catch (error) {
res.status(400).json(error)
}
}

