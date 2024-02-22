// const { Categories } = require("../models/Category")

// exports.createCategory = async function (req , res){
//     const Category = new Categories(req.body);
    
    

//     try{
//         const doc = await Category.save();
//         res.status(201).json(doc)
//         console.log(doc)
//     }
//     catch(err){
//         res.status(400).json(err)
//     }

// }

// exports.fetchCategories =    async function (req , res){
// try {
//     const categories = await categories.find({}).exec();
// res.status(200).json(categories);
// console.log(categories)

// } catch (error) {
// res.status(400).json(error)
// }
// }


const { Category } = require("../models/Category")

exports.createCategory = async function (req , res){
    const categories = new Category(req.body);
    
    

    try{
        const doc = await categories.save();
        res.status(201).json(doc)
        
    }
    catch(err){
        res.status(400).json(err)
    }

}

exports.fetchCategories =    async function (req , res){
    
try {
    const doc = await Category.find({}).exec();
res.status(200).json(doc);
console.log(doc)
} catch (error) {
res.status(400).json(error)
}
}




