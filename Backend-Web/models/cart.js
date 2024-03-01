const mongoose = require('mongoose')
const {Schema} = mongoose;


const cartSchema = new Schema({
    
    quantity :{ type:String,required: true},
    product :{ type: Schema.Types.ObjectId, ref: 'Product',required: true},
    user :{ type: Schema.Types.ObjectId, ref: 'user',required: true},
    
})



cartSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id; 
    return ret;
  }
});

exports.cart=  mongoose.model('cart', cartSchema)
