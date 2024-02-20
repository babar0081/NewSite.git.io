const mongoose = require('mongoose')
const {Schema} = mongoose;


const categorySchema = new Schema({
    label :{ type:String, required:true , unique:true},
    value :{ type:String, required:true , unique:true} ,
    
    
})



categorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id; 
    return ret;
  }
});

exports.Category=  mongoose.model('Category', categorySchema)
