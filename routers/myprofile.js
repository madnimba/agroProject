const express=require('express');

const router=express.Router();
const path = require('path');


router.get('/:id',async(req,res)=>{
    
    const specificId = req.params.id;
    console.log(specificId);
    var btnText = '';

const objectExists = global.products.find((object) => object.id === specificId);

    if(objectExists.incart==='0')
    {
        btnText='ADD TO CART';
    }
    else
    {btnText='REMOVE FROM CART';}

    res.render('details.ejs',{product:objectExists, btnText :btnText });
})

module.exports = router;
