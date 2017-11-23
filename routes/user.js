const express = require("express");
const router = express.Router();
const config = require('../config/database');
const User = require('../models/user');

router.post('/registration',(req,res)=>{
    console.log("save user");
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.password = req.body.password;
    newUser.block_status = req.body.block_status;
    newUser.delete_status = req.body.delete_status;
    newUser.verified = req.body.verified;
    newUser.verification_code = req.body.verification_code;
    newUser.fb_id = req.body.fb_id;
    newUser.google_id = req.body.google_id;
    newUser.date_tym = req.body.date_tym;
    newUser.role = req.body.role;
    console.log(this.newUser);
    newUser.save(function(err, InsertedUser){
        if(err){
            console.log("Error on Insertion of user");
        }
        else{
            res.json(InsertedUser);
        }
    });
});

module.exports = router;