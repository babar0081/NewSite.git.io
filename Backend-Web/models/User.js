const mongoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    email :{ type:String, required:true , unique:true},
    password :{ type:String, required:true } ,
    role :{ type:String, required:true } ,
    name :{ type:String} ,
    address :{ type:[Mixed]} ,
    orders :{ type:[Mixed]} ,
    
    
    
})



userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id; 
    return ret;
  }
});

exports.User=  mongoose.model('user', userSchema)

