const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{



      
    res.render('cart.ejs', { cproducts: global.cart});
})

// router.post('/cancelProduct', async(req,res)=>{

//   const cancelledProducts = req.body.cancelledProducts;
//   const cid = req.body.cid;

//   for(const product of cancelledProducts)
//   {
      
//       await removeFromCart(product,cid);
//   }
  
// })


// router.post('/updateStatus', async(req,res)=>{

//   const product = req.body.Product;
//   const status = req.body.status;

//   await updateProductStatus(product,status);
  
// })


module.exports=router;