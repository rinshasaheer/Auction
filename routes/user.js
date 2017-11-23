const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const User = require("../model/user");

  
 
router.post('/register',(req,res)=>{
    let newUser = User({
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        verification_code : req.body.verification_code,
        role: (req.body.role) ? req.body.role: 'user' ,

    });
    console.log(newUser);
    // User.addUser(newUser,(err, user)=>{
    //     if(err){
    //         res.json({success: false, msg : "Failed, Email Already Exists"});
    newUser.save(function(err, InsertedUser){
        
        if(err){
            console.log("Error on Insertion");
        }else{
            // var email = {
            //     from: 'yasirpoongadan@gmail.com',
            //     to: req.body.email,
            //     subject: 'Poll Registration Completd Successfully',
            //   //  text: 'Hello ' + req.body.name,
            //     html: '<b>Hello ' + req.body.name + '</b><p></p><p>username : ' + req.body.email +'</p><p>Password : ' + req.body.password +'</p><p>Link : http://localhost:4200/login</p>'
            //   };
            //   client.sendMail(email, function(err, info){
            //     if (err ){
            //       console.log(error);
            //     }
            //     else {
            //       console.log('Message sent: ' + info.response);
            //     }
            // });  
            res.json({success: true, msg : "User registered, Redirecting..."});
        }
    });
});

router.get('/users',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    User.getUsers((err,user)=>{
        if(err) throw err;
        return res.json(user);
       
    })
    
});

router.post('/authenticate',(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByUsername(email, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'User Not found'});
        }
        //console.log(user.passsword);
        User.comparePassword(password, user.password,(err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret,{
                    expiresIn: 60400 // sec 1 week
                });
                return res.json({
                    success:true, 
                    token : 'JWT '+ token,
                    user:{
                        id:user._id,
                        name : user.name,
                        email: user.email,
                        role: user.role
                    }
                });

            }else{
                return res.json({success:false, msg: 'Wrong Password'});
            }
        })
    })
});


module.exports = router;