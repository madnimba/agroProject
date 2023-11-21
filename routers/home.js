const express=require('express');
// const DB_user=require('../Database/login') ;
const router=express.Router();
const path = require('path');
// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');
// const cookieParser=require('cookie-parser');

global.cart = [];
global.products = [];
global.products.push(
    {id: '0',
      name: "Organic Tomatoes",
    category: "Vegetables",
    price: "120",
    description: "Fresh, locally grown organic tomatoes. Packed with flavor and essential nutrients. Perfect for salads, sandwiches, or sauces.",
    weight: "1 KG",
    quantity: 100,
    incart: '0',
    origin: "Green Acres Farm",
    certification: "USDA Organic",
    shipping: "Ships within 2 business days",
    img: "/assets/img/products/0.webp",
    SKU: "TOM001"}
    ,
    {
      id: '1',
      name: "Red Onion",
      category: "Vegetables",
      price: "70",
      description: "Farm-grown red onions—vibrant, flavorful, and locally cultivated for freshness that speaks for itself! A colorful touch to every meal",
      weight: "1",
      quantity: 100,
      incart: '0',
      origin: "Harvest Grove Orchard",
      certification: "USDA Organic",
      shipping: "Ships within 3 business days",
      img: "/assets/img/products/1.webp",
      SKU: "APL002"
    },
    {
      id: '2',
      name: "Mishti Kumra Fali",
      category: "Vegetables",
      price: "30",
      description: "Indulge in the sweetness of our fresh pumpkin slices—nature's delight in every bite. Perfectly sliced for your convenience.",
      weight: "1 KG",
      quantity: 150,
      incart: '0',
      origin: "Sunrise Farms",
      certification: "Cage-Free",
      shipping: "Ships within 1 business day",
      img: "/assets/img/products/2.webp",
      SKU: "EGG003"
    },
    {
      id: '3',
      name: "Potato Regular",
      category: "Vegetables",
      price: "30",
      description: "Savor the simplicity of our regular potatoes—versatile, hearty, and farm-fresh. From fries to mash, your culinary canvas starts here.",
      weight: "1 KG",
      quantity: 155,
      incart: '0',
      origin: "Green Acres Farm",
      certification: "USDA Organic",
      shipping: "Ships within 2 business days",
      img: "/assets/img/products/3.webp",
      SKU: "SPN004"
    },
    {
      id: '4',
      name: "Potol (Gourd)",
      category: "Vegetables",
      price: "40",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/4.webp",
      SKU: "BEEF005"
    },
    {
      id: '5',
      name: "Round Brinjal",
      category: "Vegetables",
      price: "70",
      description: "3-5 pieces. Farm fresh round brinjals—firm, flavorful, and perfect for a variety of culinary creations.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/5.png",
      SKU: "BEEF005"
    },
    {
      id: '6',
      name: "Bombay Chilli",
      category: "Vegetables",
      price: "500",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/6.webp",
      SKU: "BEEF005"
    },
    {
      id: '7',
      name: "Round Lemon",
      category: "Vegetables",
      price: "50",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/7.png",
      SKU: "BEEF005"
    },
    {
      id: '8',
      name: "Mishti Alu",
      category: "Vegetables",
      price: "110",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/8.png",
      SKU: "BEEF005"
    },
    {
      id: '9',
      name: "Kacha Holud",
      category: "Vegetables",
      price: "150",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/9.png",
      SKU: "BEEF005"
    },
    {
      id: '10',
      name: "Baby Corn",
      category: "Vegetables",
      price: "160",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/10.png",
      SKU: "BEEF005"
    },
    {
      id: '11',
      name: "Banana Flower",
      category: "Vegetables",
      price: "60",
      description: "Tender and lean grass-fed beef cuts for grilling and roasting. Ethically raised and sustainably sourced.",
      weight: "1 kg",
      quantity: 50,
      incart: '0',
      origin: "Pasture Prime Ranch",
      certification: "Grass-Fed",
      shipping: "Ships within 4 business days",
      img: "/assets/img/products/11.webp",
      SKU: "BEEF005"
    },
  )
// const maxAge = 3*24*60*60;
// const createToken = (id) =>{
//     return jwt.sign({ id }, 'torkibhai',
//     {
//         expiresIn: maxAge
//     });
// }

router.get('/',async(req,res)=>{
    console.log()
    res.sendFile(path.join(__dirname,'../views/index.html'));
})




// router.post('/',async(req,res)=>{
//     let results=[] ;
//     let errors = [];

//     // const salt = await bcrypt.genSalt(10);
//     // const pw = await bcrypt.hash(req.body.password, salt);

//     results=await DB_user.readEmail(req.body.email,req.body.option);
//     //console.log(results[0].PASSWORD)
//     let token = '';
//     if(results.length>0){
//     if(req.body.option==='user')
//         { token = createToken(results[0].USER_ID);
//         }
//     else
//     { token=createToken(results[0].SHOP_ID);}
//     res.cookie('jwt',token,{maxAge: maxAge*1000});
//     }
    
   
    
//     if(results.length==0){
//         errors.push('No such user found');
//         res.render('login.ejs',{error:"",message:"User not found! Please enter correct credentials!"});
//     }

//     else if(!(await bcrypt.compare(req.body.password, results[0].PASSWORD)))
//     {
//         errors.push('Wrong Password');
//         res.render('login.ejs',{error:"",message:"Wrong Password! Please enter correct credentials!"}); 
//     }
    
//     else if(req.body.option==='user')

//         {
           
//            res.redirect('/app/user');
//         }
//         else if(req.body.option=='shop'){
           
//             res.redirect('/app/shop');
//         }
    
    
// })


module.exports = router;

