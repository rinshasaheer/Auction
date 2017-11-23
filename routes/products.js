
const express = require("express");
const router = express.Router();
const config = require('../config/database');
const Product = require("../models/product");
const socketIo = require("socket.io");
 
router.post('/addnew',(req,res,next)=>{


    prodObj = {
        name:  req.body.name,
        image: req.body.image,
        desc: req.body.desc,
        bid_amount: req.body.amount,
        min_bid_rate: req.body.min_bid_rate,
        start_date : req.body.start_date,
        end_date : req.body.end_date,
    };
    Product.addProduct(prodObj,(err, user)=>{
        if(err){
            res.json({success: false, msg : "Failed, went somthing wrong "});
        }else{
            res.json({success: true, msg : "Poll Added Seccessfully, Redirecting..."});
        }
    });
});

router.get('/products',(req,res,next)=>{
    Product.getAllProduct((err,poll)=>{
        if(err) throw err;
        return res.json(poll);
    })
    
});

router.delete('/delete/:id',(req,res,next)=>{
    Product.deleteProduct(req.params.id,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Faild to delete user'});
        }else{
            return res.json({success:true, msg: 'deleted successfully'});
        }
    })
});

router.get('/product/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    Product.getProductById(req.params.id,(err,poll)=>{
        if(err) throw err;
        return res.json(poll);
    })
});

module.exports = router;