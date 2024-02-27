const mongoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    email :{ type:String, required:true , unique:true},
    password :{ type:String, required:true } ,
    role :{ type:String, required:true, default:'user' } ,
    name :{ type:String} ,
    address :{ type:[Schema.Types.Mixed]} ,
    orders :{ type:[Schema.Types.Mixed]} ,
    
    
    
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

