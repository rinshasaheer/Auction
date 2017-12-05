const express = require("express");
const router = express.Router();
// const mongoose = require('mongoose');
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const User = require("../model/user");
'use strict';

// router.post('/addnew',(req,res,next)=>{
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mean.symptots@gmail.com", // generated ethereal user
        pass: "Symptots@2017"  // generated ethereal password
    }
});


router.post('/register',(req,res)=>{
    // console.log(req.body);
    let newUser = new User({
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        verification_code : req.body.verification_code,
        role: (req.body.role) ? req.body.role: 'user' ,

    });

    User.find({ name: req.body.name }, function (err, doc){
        if(doc.length!=0){
            res.json({success: false, msg : "Failed"});
        }
        else{
            User.find( { $and: [ { email: req.body.email}, {google: {$exists: false }}, {facebook : {$exists: false }} ] } , function (err, doc){
                if(doc.length!=0){
                    res.json({success: false, msg : "Failed"});
                }
                else{
                    User.addUser(newUser,(err, user)=>{
       
                        if(err){
                            res.json({success: false, msg : "Failed"});
                        }else{
                            nodemailer.createTestAccount((err, account) => {
                                
                                    // create reusable transporter object using the default SMTP transport
                                
                                    // setup email data with unicode symbols
                                    let mailOptions = {
                                        from: 'mean.symptots@gmail.com', // sender address
                                        to: req.body.email, // list of receivers
                                        subject: 'Please log in to your account', // Subject line
                                        text: '', // plain text body
                                        html: '<b><h3>Hi Rinsha,</h3><br/>We’re excited to get you started using Auction! You’re on your way to being fully set up, but first, you must finish your account verification by clicking the below link:<br/>Username: '+req.body.email+'<br/>Password: '+req.body.password+'<br/>Verification Link:</a> http://192.168.1.9:3000/email-verification/'+req.body.verification_code+'</a><br/> Thank You!</b>' // html body
                                    };
                                
                                    // send mail with defined transport object
                                    transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                // return console.log(error);
                            }
                            // console.log('Message sent: %s', info.messageId);
                            
                            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    
                            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                        });
                    });
                res.json({success: true, msg : "User registered, Redirecting..."});
            }
    });
}
});
}
});
});

//all users
router.get('/users',(req,res,next)=>{
    User.getUsers((err,user)=>{
      //  console.log(user);
       if(err) throw err;
       return res.json(user);
    })    
});

//all disabled users
router.get('/disabledusers',(req,res,next)=>{
    User.getDisabledUsers((err,user)=>{
        if(err) throw err;
        return res.json(user);
       
    })    
});

//all deleted users
router.get('/deletedusers',(req,res,next)=>{
    User.getDeletedUsers((err,user)=>{
        if(err) throw err;
        return res.json(user);
        })
  });

//delete user
router.delete('/delete/:id',(req,res,next)=>{
    User.deleteUser(req.params.id,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Faild to delete user'});
        }else{
            return res.json({success:true, msg: 'deleted successfully'});
        }
    })
});


//disable user
router.delete('/disable/:id',(req,res,next)=>{
    User.blockUser(req.params.id,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Faild to disabled user'});
        }else{
            return res.json({success:true, msg: 'disabled successfully'});
        }
    })
});

//unblock
router.delete('/unblock/:id',(req,res,next)=>{
    User.unblockUser(req.params.id,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Faild to unblocked user'});
        }else{
            return res.json({success:true, msg: 'unblocked successfully'});
        }
    })
});



//router.post('/authenticate',(req,res,next)=>{
 //   const email = req.body.email;
 //   const password = req.body.password;
  //  User.getUserByUsername(email, (err,user)=>{

//router.get('/users',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
   // User.getUsers((err,user)=>{
    //    if(err) throw err;
    //    return res.json(user);
       
   // })
    
//});

router.post('/authenticate',(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    // User.findOne({email:email}, (err,user)=>{
    User.findOne({ $and: [ { email: email},{ google: null}, {facebook : null} ] }, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'User Not found'});
        }
        // console.log(user);
        User.comparePassword(password, user.password,(err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                if(user.block_status == "true"){
                    return res.json({success:false, msg: 'Account blocked'});
                }
                if(user.delete_status == "true"){
                    return res.json({success:false, msg: 'Account deleted'});
                }
                if(user.verified == "false"){
                    return res.json({success:false, msg: 'User not verified'});
                }
                else if(user.block_status == "false" && user.delete_status == "false" && user.verified == "true"){
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
                }
            }else{
                return res.json({success:false, msg: 'Wrong Password'});
            }
        });
    }).lean();
});

router.put('/verify/:id', function(req, res){
    // console.log(req.params.id);
    User.findOneAndUpdate({verification_code : req.params.id }, 
        { $set: { verified: true } }, 
        { new: true }, 
        function(err, doc) {
            if(doc==null){
                return res.json({success:false, msg: 'User Not verified'});
            }
            else{
                return res.json({success:true, msg: 'User verified'});
            }
        
        });
    });

router.put('/genToken/:id', function(req, res){
    User.findOne({"_id":req.params.id}, (err,user)=>{
        if(err) throw err;
        else{
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
        }
    }).lean();
    });



    

router.get('/getemail',function(req,res){
    // console.log("user get");
    User.getUsers1((err,user)=>{
        user.forEach(function(i) {
            // console.log(i.email);
        
      
        // this.user.email.forEach((i) => {
        //     console.log(i);
        //   });
       if(err){
            console.log("Error " + err);
        }else{
     
     nodemailer.createTestAccount((err, account) => {
                
                    // create reusable transporter object using the default SMTP transport
                   
                
                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: 'mean.symptots@gmail.com', // sender address
                        to: i.email, // list of receivers
                        subject: 'New Product Added for Auction', // Subject line
                        text: '', // plain text body
                        html: '<b><h3>Hi,</h3><br/>We add a new Product for bid.. Please login in to your account <br/> Thank You!</b>' // html body
                    };
                
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        // console.log('mail');
                        if (error) {
                            console.log('error');
                             return console.log(error);
                        }
                        // console.log('Message sent: %s', info.messageId);
                        
                        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                
                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                });
                
               
        
        } 
    });
        return res.json(user);
    
        
    });
});


router.get('/users_id_as_index',(req,res,next)=>{
    User.getUsers((err,user)=>{
        if(err) throw err;
        var users = {};
        user.forEach((usr, i) => {
            tmp = {};
            tmp._id = usr._id;
            tmp.name = usr.name;
            tmp.email = usr.email;
            tmp.date_tym = usr.date_tym;
            users[usr._id] = tmp;
        });
        return res.json(users);
       
    })
    
});
router.get('/get_loggedin_user',(req,res,next)=>{
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            try {
                decoded = jwt.verify(authorization, config.secret);
                console.log(decoded);
                res.json(decoded);
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
    }else{
        return res.status(401).send('Invalid User');
    }
    
});






// router.get('/getemail',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
//     console.log("here");
//     User.getUsers((err,user)=>{
//         if(err) throw err;
       
//         nodemailer.createTestAccount((err, account) => {
            
//                 // create reusable transporter object using the default SMTP transport
               
            
//                 // setup email data with unicode symbols
//                 let mailOptions = {
//                     from: 'mean.symptots@gmail.com', // sender address
//                     to: user.email, // list of receivers
//                     subject: 'New Product Added for Auction', // Subject line
//                     text: '', // plain text body
//                     html: '<b><h3>Hi,</h3><br/>we added a new Product for bid.. Plese login in to your account <br/> Thank You!</b>' // html body
//                 };
            
//                 // send mail with defined transport object
//                 transporter.sendMail(mailOptions, (error, info) => {
//                     console.log('mail');
//                     if (error) {
//                         console.log('error');
//                          return console.log(error);
//                     }
//                     // console.log('Message sent: %s', info.messageId);
                    
//                     // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
//                     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//                     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//                 });
//             });
            
//             return res.json(user);
//     })
    
// });

router.put('/saveAddress',passport.authenticate('jwt',{session:false}),function(req,res){
    
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;
                try {
                    decoded = jwt.verify(authorization, config.secret);
                    // console.log(decoded);
                    User.findOneAndUpdate({"_id" : decoded._id},
                    {
                        $push:{"address": {pid: req.body.pid,
                             name:req.body.name,
                             phone:req.body.phone,
                             pin:req.body.pin,
                             addr1:req.body.addr1,
                             addr2:req.body.addr2,
                             addr3:req.body.addr3,
                             addr4:req.body.addr4,
                             }}
                    },
                    { new : true },
                    (err, user)=>{
                        if(err){
                            res.json({success: false, msg : "Failed, went somthing wrong "});
                        }else{
                            res.json({success: true, msg : "Address saved successfully"});
                        }
                    });
                } catch (e) {
                    return res.status(401).send('unauthorized');
                }
        }else{
            return res.status(401).send('Invalid User');
        }
    
    });

module.exports = router;


