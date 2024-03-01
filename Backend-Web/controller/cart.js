const {cart}= require('../models/cart.js')

exports.fetchCartByUser =    async function (req , res){
    const {user}= req.query;
    try {
        const cartItems = await cart.find({user:user}).populate('user').populate('product');
    res.status(200).json(cartItems);
    
    } catch (error) {
    res.status(400).json(error)
    }
    }


    exports.addToCart = async function (req , res){
        const Cart = new cart (req.body);
        console.log(cart)
        
        
    
        try{
            const doc = await Cart.save();
            const result = await doc.populate('product')
            res.status(201).json(result)
            
        }
        catch(err){
            res.status(400).json(err)
        }
    
    }

    exports.UpdateCart = async function(req,res){

        const {id}=req.params;
        try {
            const Cart  = await cart.findByIdAndUpdate(id  ,req.body,{new:true}  )
            res.status(200).json(Cart);
    
    
    
        } catch (error) {
            res.status(400).json(error)
            console.log(error)
        }
    
    }
    exports.deleteFromCart = async function(req,res){

        const {id}=req.params;
        try {
            const Cart  = await cart.findByIdAndDelete(id  ,req.body,{new:true}  )
            res.status(200).json(Cart);
    
    
    
        } catch (error) {
            res.status(400).json(error)
            console.log(error)
        }
    
    }