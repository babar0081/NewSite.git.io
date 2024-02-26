const { User } = require("../models/User");



exports.createUser = async function (req , res){
    const categories = new user(req.body);
    try{
        const doc = await categories.save();
        res.status(201).json(doc)
        
    }
    catch(err){
        res.status(400).json(err)
    }

}