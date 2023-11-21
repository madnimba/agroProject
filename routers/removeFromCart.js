const express=require('express');

const router=express.Router();

router.post('/',async(req,res)=>{
    var productId = req.body.productId;
    
    
    try{
        const prod = global.cart.find((object) => object.id === productId);
        const product = global.products.find((object) => object.id ===productId)
        product.incart = '0';

        const index = global.cart.indexOf(prod);
        
        
        global.cart.splice(index, 1);
        console.log(global.cart);
    res.sendStatus(200);
    }catch(err)
    {
        res.status(404);
    }
    
})




module.exports= router;