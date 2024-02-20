const mongoose = require('mongoose')
const {Schema} = mongoose;


const brandSchema = new Schema({
    label :{ type:String, required:true , unique:true},
    value :{ type:String, required:true , unique:true} ,
    
    
})



brandSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id; 
    return ret;
  }
});

exports.Brand=  mongoose.model('Brand', brandSchema)
