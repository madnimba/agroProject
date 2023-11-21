const express=require('express');

const router=express.Router();

router.post('/',async(req,res)=>{
    console.log("adding");
    var productId = req.body.productId;
    
    var quantity = req.body.quantity;
    const prod = global.products.find((object) => object.id === productId);
    prod.incart = quantity;
    
    try{

    global.cart.push(prod);
    console.log(global.cart);
    res.sendStatus(200);
    }catch(err)
    {
        res.status(404);
    }
    
})




module.exports= router;