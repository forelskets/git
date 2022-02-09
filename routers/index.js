const express = require('express');
const User = require('../models/users');
const Otp = require('../models/otp');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Bank = require('../models/bank');
const auth = require('../middleware/Authentication')


router.post('/login', async (req, res)=>{
   const {email , password} = req.body;
   if(!email || !password){
      return res.status(400).json( "plz filled the login details");
   }
   try{
      const userExist = await User.findOne({Email : email});
      // console.log("userExixt", userExist);
      if(userExist){
      const isMatch = await bcrypt.compare(password, userExist.Password); 
      console.log("isMatch",isMatch);
      if(userExist && isMatch){
         const token = await userExist.generateAuthToken();
         res.cookie('jwtoken', token);
         
         res.status(200).json(userExist)
      }
      else{
           res.status(400).json("Invalid credentials")
      }}
      else{
         res.status(400).json("Invalid credentials")
      }
   }catch(err){
      console.log(err);
   }
   // console.log(req.body.email, req.body.password)
   
})

router.post('/addBank', async(req, res)=>{
   // console.log(req.body.bankId, req.body.bankName, req.body.bankShortName);
  try{ const {bankId , bankName , bankShortName} = req.body;
   const user = new Bank({Id:bankId, BankName:bankName , BankShortName:bankShortName});
   const addBank = await user.save();
   if(addBank){
      res.status(201).json({message: "user register successfully"});
   }
}catch(err){
   console.log(err);
}
})

router.get('/addBank',auth, (req,res)=>{
   Bank.find(function(err, data){
      if(err) throw err;
      // console.log(data);
      res.status(200).json(data);
   });
   
})


router.post('/userRegister',async (req, res)=>{
   console.log(req.body.Name,"tata")
     try { let data1 = await User.collection.count();
       const {  Name ,Email , Password , Mobile } = req.body;

       data1++ ;
       if(!Name || !Email || !Password || !Mobile){
          res.status(400).send("please fill data")
       }
       else {
       const isMatch = await User.findOne({Email})
       console.log(isMatch,"isMatch")
       if(isMatch) {

          res.status(400).json("user is already exist.")
       }
       else{
      const user =  new User({RoleId: 2, UserId: data1 , Name , Email , Password , Mobile , Status:true });
     
      const addUser = await user.save();
      console.log(addUser,"dekho lo user")
      const token = await addUser.generateAuthToken();
      res.cookie('jwtoken', token);
      // console.log(addUser);
      const otpFunc= async ()=>{
         const otpCode = Math.floor((Math.random()*10000 + 1));
         const otpData = new Otp({
             Email,
             Mobile,
             Code: otpCode,
            expireIn: new Date().getTime() + (300*10000)
         })
         const otpResponse = await otpData.save();
         otpMail(Email, otpCode , Name);
         // res.status(200).send({message: "otp sent"})
      }
       function otpMail(Email , otpCode , Name){
      
      "use strict";
      const nodemailer = require("nodemailer");
      
      
      async function main() {
        
      
       
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: "mr.sachinpathak95@gmail.com",
            pass: "SacPass@112233",
          },
        });
      
      
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <mr.sachinpathak95@gmail.com>', 
          to: `${Email}, du19sh92yant@gmail.com`, 
          subject: `Hello ${Name}✔`, 
          html: `<b>${otpCode}</b>`, 
        });

        
      }
      
      main().catch(console.error);}

      
      otpFunc();
      if(addUser){
         res.status(200).json( "user register successfully1")
      }
   } }
   }catch(err){
      console.log(err);
   }

})


router.post('/userLogin', async(req, res)=>{
   console.log(req.body.email , req.body.password);
   const {email , password} = req.body;
   if(password && email){
   const isExist = await User.findOne({Email:email})
   // console.log("a",isExist);
   if(isExist){
     const isMatch = await bcrypt.compare(password, isExist.Password)
   //   console.log("b",isMatch);
      if(isMatch){
         const token = await isExist.generateAuthToken();
         res.cookie('jwtoken', token);
         
         res.status(200).json(isExist);
      }
      else{
         res.status(400).json("login fail")
     }
   }else{
      res.status(400).json("invalid credentials")
   }
}else{
   res.status(400).json("please fill data")
}
})

 router.post('/matchOtp',async (req,res)=>{
    console.log(req.body.otp);
    const data = await Otp.find({ Code: req.body.otp});
    console.log(data);
    if(data){
       const currentTime = new Date().getTime();
       const diff = data.expireIn - currentTime;
       if(diff < 0){
          res.status(400).json('Token Failed')
       }else{
          res.status(200).json("Token Matched")
       }
    }else{
       res.status(400).json("Invalid otp")
    }
 })


router.get('/dashboard', auth , (req,res)=>{
    res.status(200).send(req.rootUser);
})

router.get('/udashboard', auth , (req,res)=>{
   res.status(200).send(req.rootUser);
})
router.get('/profile', auth , (req,res)=>{
   res.status(200).send(req.rootUser);
})
router.get('/initialState',  (req,res)=>{
   const data = req.cookies.initialState;
   if(!data){
      res.status(200).send(false)}
   else if(data == true){
      res.status(200).send(true)
   }
})

router.get('/userLogout',  (req,res)=>{
   res.clearCookie('jwtoken', {path:'/'})
   res.status(200).send("user Logout");
})
module.exports = router;