const { User } = require("../models/User");



exports.createUser = async function (req , res){
    const user = new User(req.body);
    try{
        const doc = await user.save();
        res.status(201).json(doc)
        console.log(doc)
    }
    catch(err){
        res.status(400).json(err)
    }

}
exports.loginUser = async function (req , res){



    try{
        const user = await User.findOne({email:req.body.email},'id email name').exec();
        if(!user){
            res.status(401).json({message:'no such user email'})

        }
        
        else if(user.password===req.body.passowrd){
            res.status(201).json({id:user.id,email:user.email,name:user.name,user:user.addresses})
            console.log({user})

        }else{
            res.status(401).json({message:"invalid Credentials"})

        }
        
        
    }
    catch(err){
        res.status(400).json(err)
    }



}