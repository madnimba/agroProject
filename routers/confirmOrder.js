const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{


    global.cart = [];
    console.log("ok done");
      
    res.render('./talent');
})

module.exports = router;