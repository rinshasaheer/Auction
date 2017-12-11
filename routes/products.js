
const express = require("express");
const router = express.Router();
const config = require('../config/database');
const Product = require("../model/product");
const User = require("../model/user");
const passport = require("passport");
const pro = require('../model/product');
const jwt = require("jsonwebtoken");
//const io = require("socket.io").listen(3001);

// function to add new product
// author : 
// Date : 
// Last Modified : 

const mongoose = require('mongoose');
//Added for Image Upload
var multer = require('multer');
var fileName = "";


// router.post('/addnew',(req,res,next)=>{
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "mean.symptots@gmail.com", // generated ethereal user
            pass: "Symptots@2017"  // generated ethereal password
        }
    });



var storage = multer.diskStorage({ //multers disk storage settings
    
            destination: function (req, file, cb) {
    
                cb(null, './angular/src/assets/uploads/');
    
            },
    
            filename: function (req, file, cb) {
    
                var datetimestamp = Date.now();
    
                cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
                fileName = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
            }
    
        });
    
    
    
        var upload = multer({ //multer settings
    
                        storage: storage
    
                    }).single('file');


var returnRouter = function(io) { 


    router.post('/upload', function(req,res){
        'use strict';



    upload(req,res,function(err){
        console.log(req.body);
                    // console.log(req.file);
        
                    if(err){
        
                         res.json({error_code:1,err_desc:err});
        
                         return;
        
                    }
        
                     res.json({error_code:0,err_desc:null, filename:fileName});
        
                });
        
            });
            

        
        
        
     

            router.post('/addnew',function(req,res){
                console.log("Insert a Product");
                var newPro = new pro();
                newPro.name = req.body.name;
                newPro.desc = req.body.desc;
                newPro.bid_amount = req.body.bid_amount;
                newPro.min_bid_rate = req.body.min_bid_rate;
                newPro.start_date = req.body.start_date;
                newPro.end_date = req.body.end_date;
                newPro.image = fileName;
                // newPoll.answers = req.body.answers;
                newPro.save(function(err,insertedPro){
                    if(err){
                        console.log("Error " + err);
                    }else{
                        
            
                        res.json(insertedPro);
                    }
                })
            
            });
//PRODUCT INFO CLOSE
router.get('/inform-closedproduct/:id',(req,res,next)=>{
    // console.log('yes');
    // console.log(req.params.id);
    io.sockets.emit("closebid", {
        prod_id : req.params.id
    });
});
//PRODUCT INFO START
router.get('/inform-startproduct/:id',(req,res,next)=>{
     console.log('new start');
    // console.log(req.params.id);
    io.sockets.emit("startbid", {
        prod_id : req.params.id
    });
});
//var async = require('async');



// function bid a product from front end
// author : Yasir Poongadan
// Date : 4-12-2017
// Last Modified : 4-12-2017

router.put('/bid_a_product',passport.authenticate('jwt',{session:false}),function(req,res,next){

    console.log(req.body);

    if (req.headers && req.headers.authorization) {

        var authorization = req.headers.authorization.substring(4), decoded;
        try {
            decoded = jwt.verify(authorization, config.secret);
            console.log(decoded);
            Product.findOneAndUpdate(
                {"_id" : req.body.pid},
                { $push:{"bidders": {user_id: decoded._id, amount:req.body.amount }} },
                { new : true },
                (err, user)=>{
                    if(err){
                        res.json({success: false, msg : "Failed, went somthing wrong "});
                    }else{
                        // write code to emit socket    
                        // io.sockets.on('connection', function (socket) {
                        //     console.log('New User Connected');
                        //     // socket.on('newBid', function (data) {
                        //     //   console.log(data);
                        //     // });
                        // });
                        io.sockets.emit("newbid", {
                            prod_id : req.body.pid
                        });
                        res.json({success: true, msg : "Your bid Submitted successfully"});
                    }
            });

        } catch (e) {
            return res.status(401).send('unauthorized 123');
        }
    }else{
        return res.status(401).send('Invalid User');
    }

});


// function bid a product from front end
// author : Yasir Poongadan
// Date : 4-12-2017
// Last Modified : 4-12-2017

router.get('/closed_products',(req,res)=>{

    Product.aggregate([
          {
            $match:{
                "end_date" : {"$lt" : new Date()},
            }
         },
        {
            $lookup: {
                from: "users",
                localField: "bidders.user_id",
                foreignField: "_id",
                as: "user_details"
            }
        },

        ]).exec(function(err, results){
      //  console.log(results);
      return res.json(results);
        // res.json(results);
        // var fs = require('fs');
        // fs.writeFile('test.json', JSON.stringify(results, null, 4));
     })
});

router.get('/runnig_products',(req,res)=>{

    Product.aggregate([
          {
            $match:{
                "end_date" : {"$gt" : new Date()},
                "start_date" : {"$lt" : new Date()},
            }
         },
        {
            $lookup: {
                from: "users",
                localField: "bidders.user_id",
                foreignField: "_id",
                as: "user_details"
            }
        },

        ]).exec(function(err, results){
      return res.json(results);
     })
});
 
// router.post('/addnew',(req,res,next)=>{


//     prodObj = {
//         name:  req.body.name,
//         image: req.body.image,
//         desc: req.body.desc,
//         bid_amount: req.body.amount,
//         min_bid_rate: req.body.min_bid_rate,
//         start_date : req.body.start_date,
//         end_date : req.body.end_date,
//     };
//     Product.addProduct(prodObj,(err, user)=>{
//         if(err){
//             res.json({success: false, msg : "Failed, went somthing wrong "});
//         }else{
//             res.json({success: true, msg : "Poll Added Seccessfully, Redirecting..."});
//         }
//     });
// });


router.get('/products',(req,res,next)=>{
    Product.getAllProduct((err,poll)=>{
        if(err) throw err;
        return res.json(poll);
    })
    
});


// router.get('/closed_products',(req,res,next)=>{
//     Product.getAllCloasedProduct((err,poll)=>{
//         if(err) throw err;
//         return res.json(poll);
//     });
// });

router.get('/upcoming_products',(req,res,next)=>{
    Product.getAllUpcomingProduct((err,product)=>{
    });
});
router.get('/products',(req,res,next)=>{
    Product.getAllProduct((err,product)=>{
        if(err) throw err;
        return res.json(product);
    })
    
});


// router.get('/upcoming_products',(req,res,next)=>{
//     Product.getAllUpcomingProduct((err,product)=>{
//         if(err) throw err;
//         return res.json(product);

//     })
    
// });


router.delete('/delete/:id',(req,res,next)=>{
    Product.deleteProduct(req.params.id,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Faild to delete user'});
        }else{
            return res.json({success:true, msg: 'deleted successfully'});
        }
    });
});

router.get('/product/:id',(req,res,next)=>{
    Product.getProductById(req.params.id, (err,product)=>{
        if(err) throw err;
        console.log(product);
        return res.json(product);
    })
});


// router.put('/update/:id',function(req,res){
// //    console.log(req);
// Product.findByIdAndUpdate(req.params.id,
//     {
//         $set : {name: req.body.name, desc : req.body.desc, bid_amount : req.body.bid_amount, min_bid_rate : req.body.min_bid_rate, start_date : req.body.start_date, end_date : req.body.end_date  }
//     },
//     {
//     new :true
//     },
//     function(err, updatedPro){
//         if(err){
//             res.send("error updating product");
//         }else{
//             res.json(updatedPro);
//         }
//     }

//    )
// });
router.put('/updateProduct/:id',function(req,res){
    // console.log(req.body);
    Product.findByIdAndUpdate(req.params.id,
        {
            $set : {name: req.body.name, desc : req.body.desc, bid_amount : req.body.bid_amount, min_bid_rate : req.body.min_bid_rate, start_date : req.body.start_date, end_date : req.body.end_date, image: req.body.fileName }
        },
        {
        new :true
        },
        function(err, updatedPro){
            if(err){
                res.send("error Updating product");
            }else{
                res.json(updatedPro);
                // console.log(updatedPro);
            }
        }
    
       )
    });




router.put('/updatedel/:id',function(req,res){
    //    console.log(req);
    Product.findByIdAndUpdate(req.params.id,
        {
            $set : {status : false  }
        },
        {
        new :true
        },
        function(err, updatedPro){
            if(err){
                res.send("error deleting product");
            }else{
                res.json(updatedPro);
            }
        }
    
       )
    });


router.get('/completedproduct',(req,res,next)=>{
    Product.getFinishedAuctionProduct((err,products)=>{
        if(err) throw err;
        // console.log(Date().toString());
        return res.json(products);
    })
});

router.get('/upcomingproduct',(req,res,next)=>{
    // console.log("s");
    Product.getUpcomingAuctionProduct((err,products)=>{
        if(err) throw err;
        return res.json(products);
    })
});

router.get('/highBid/:id',(req,res,next)=>{
    Product.getHighestBid(req.params.id,(err,products)=>{
        if(err) throw err;
        console.log(products);
        return res.json(products);
    })
});

router.get('/myauctionproduct/:id',(req,res,next)=>{
    console.log(req.params.id);
    Product.getMyAuctionProduct(req.params.id,(err,products)=>{
        if(err) throw err;
        console.log(products);
        return res.json(products);
    })
});

router.put('/updateInterested/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    console.log("uInter");
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            try {
                decoded = jwt.verify(authorization, config.secret);
                console.log(decoded);
                Product.findOneAndUpdate({"_id" : req.params.id},
                {
                    $push:{"intrested_ids": {user_id: decoded._id}}
                },
                { new : true },(err, user)=>{
                    if(err){
                        res.json({success: false, msg : "Failed, went somthing wrong "});
                    }else{
                        res.json({success: true, msg : "bid completed successfully"});
                    }
                });
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
    }else{
        return res.status(401).send('Invalid User');
    }

});

router.get('/mynotifications/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    Product.getMyNotification(req.params.id, (err,user)=>{
    if(err) throw err;
    return res.json(user);
    
    })
});    

router.put('/statusconfirm/:id',(req,res,next)=>{
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            //try {
                decoded = jwt.verify(authorization, config.secret);
                Product.findById(req.params.id, (err, data) => {
                    if(err) throw err;
                    else{
                        // console.log(data);
                        var temp, high_amount = 0;
                        data.bidders.forEach(function(item) {
                            if(item.bid_status != "confirmed" && item.bid_status != "rejected"){
                                         temp = item.amount;
                                        //  console.log(temp);
                                         if(high_amount <= temp ){
                                           high_amount = temp;
                                           user_id1 = item.user_id;
                                           id1= item._id;
                                         }
                                   } 
                        });
                        //  console.log(id1,high_amount,user_id1);
                         Product.findOneAndUpdate({"bidders._id" : id1},
                            { $set: {  "is_bid_completed" : true, "bidders.$.bid_status" : "confirmed","user_notification.status" : false, "admin_notification.user_id" : user_id1 }},
                            { new: true }, 
                            function(err, doc) {
                                if(err) throw err;
                                // console.log(doc);
                                if(doc==null){
                                    return res.json({success:false, msg: 'Error'});
                                }
                                else{
                                    return res.json({success:true, msg: 'Confirmed'});
                                }
                         });
                    }
                })
    }else{
        return res.status(401).send('Invalid User');
    }
});


router.put('/statusreject/:id',(req,res,next)=>{
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            //try {
                decoded = jwt.verify(authorization, config.secret);
                Product.findById(req.params.id, (err, data) => {
                    if(err) throw err;
                    else{
                        // console.log(data);
                        var temp, high_amount = 0;
                        id1 = '';
                        data.bidders.forEach(function(item) {
                            if(item.bid_status != "confirmed" && item.bid_status != "rejected"){
                                         temp = item.amount;
                                        //  console.log(temp);
                                         if(high_amount <= temp ){
                                           high_amount = temp;
                                           user_id1 = item.user_id;
                                           id1= item._id;
                                         }
                                   } 
                        });
                         console.log(id1);
                         Product.findOneAndUpdate({"bidders._id" : id1},
                            { $set: {"bidders.$.bid_status" : "rejected", "user_notification.status" : false}},
                            { new: true }, 
                            function(err, doc) {
                                if(err) throw err;
                                // console.log(doc);
                                if(doc==null){
                                    return res.json({success:false, msg: 'Error'});
                                }
                                else{
                                    io.sockets.emit("userbidreject", {
                                        prod_id : req.params.id
                                    });
                                    return res.json(doc);

                                }
                         });

                    }
                })
    }else{
        return res.status(401).send('Invalid User');
    }
});

router.get('/getnotification/:id',(req,res,next)=>{
    Product.find({"user_notification.user_id" : req.params.id , "user_notification.status" : true}, (err,product)=>{
    if(err) throw err;
    return res.json(product);
    })
}); 

router.put('/updatenotification/:id',(req,res,next)=>{
    // Product.findOne({"user_notification.user_id" : id , "user_notification.status" : true}, (err,product)=>{
    Product.findByIdAndUpdate(req.params.id, 
        {
        $set:{"user_notification.user_id": req.body.user_id, "user_notification.status": true}
        },
    { new : true },
        (err, product)=>{
        if(err) throw err;
        return res.json(product);
        })
}); 

router.put('/adminViewed/:id', function(req, res){
    // console.log(req.params.id);
    Product.findByIdAndUpdate(req.params.id, 
        { $set: { "admin_notification.is_viewed": true } }, 
        { new: true }, 
        function(err, doc) {
            if(doc==null){
                return res.json({success:false, msg: 'Admin viewed success'});
            }
            else{
                return res.json({success:true, msg: 'Admin viewed error'});
            }
        
        });
    });



module.exports = router;
//module.exports = router;
return router;
}

module.exports = returnRouter;
