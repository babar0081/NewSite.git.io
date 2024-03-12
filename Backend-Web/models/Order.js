const mongoose = require('mongoose')
const {Schema} = mongoose;


const orderSchema = new Schema({
    
  
    items:{type:[Schema.Types.Mixed],required:true},
    user :{ type: Schema.Types.ObjectId, ref: 'user',required: true},
    totalAmount:{type:Number},
    totalitems:{type:Number},
    paymentMethod:{type:Number,required:true},
    selectedAddress:{type:Schema.Types.Mixed,required:true},
    status:{type:Number,default:'pending'},
    
})



orderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id; 
    return ret;
  }
});

exports.Order=  mongoose.model('Order', orderSchema)
