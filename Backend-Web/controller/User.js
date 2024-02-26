const {User} =require ('../models/User');

exports.createUser = async function (req , res){
    const user = new User(req.body);
    try{
        const doc = await user.save();
        res.status(201).json(doc)
        
    }
    catch(err){
        res.status(400).json(err)
    }

}

exports.fetchUserById =    async function (req , res){
    const{id}=req.params;
try {
    const user = await User.findById(id , 'name email id ').exec();
res.status(200).json(user);
console.log(user)
} catch (error) {
res.status(400).json(error)
}
}


exports.UpdateUser = async function(req,res){

    const {id}=req.params;
    try {
        const user= await User.findByIdAndUpdate(id  ,req.body,{new:true}  )
        res.status(200).json(user);



    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }

}




