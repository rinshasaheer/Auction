const express = require("express");
const router = express.Router();
// const mongoose = require('mongoose');
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const User = require("../model/user");
'use strict';
const nodemailer = require('nodemailer');

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
    User.addUser(newUser,(err, user)=>{
       
        if(err){
            res.json({success: false, msg : "Failed"});
        }else{
            nodemailer.createTestAccount((err, account) => {
                
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: "mean.symptots@gmail.com", // generated ethereal user
                            pass: "Symptots@2017"  // generated ethereal password
                        }
                    });
                
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
    User.findOne({email:email}, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'User Not found'});
        }
        console.log(user);
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

module.exports = router;
