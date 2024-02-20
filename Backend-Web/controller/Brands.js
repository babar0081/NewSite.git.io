const { Brand } = require("../models/Brand")



exports.fetchBrands =    async function (req , res){
try {
    const brands = await Brand.find({}).exec();
res.status(200).json(brands);

} catch (error) {
res.status(400).json(error)
}
}

