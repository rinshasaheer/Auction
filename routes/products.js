
const express = require("express");
const router = express.Router();
const config = require('../config/database');
const Product = require("../model/product");
const User = require("../model/user");
const passport = require("passport");
const pro = require('../model/product');
const jwt = require("jsonwebtoken");


//     prodObj = {
//         name:  req.body.name,
//        // image: req.body.image,
//         desc: req.body.desc,
//         bid_amount: req.body.bid_amount,
//         min_bid_rate: req.body.min_bid_rate,
//         //start_date : req.body.start_date,
//         // end_date : req.body.end_date,
//     };
//     // console.log(req.body);
//     Product.addProduct(prodObj,(err, user)=>{
//          console.log(user);
//         if(err){
//             res.json({success: false, msg : "Failed, went somthing wrong "});
//         }else{
//             res.json({success: true, msg : "Poll Added Seccessfully, Redirecting..."});
//         }
//     });
// });




router.post('/addnew',function(req,res){
    console.log("Insert a Product");
    var newPro = new pro();
    newPro.name = req.body.name;
    newPro.desc = req.body.desc;
    newPro.bid_amount = req.body.bid_amount;
    newPro.min_bid_rate = req.body.min_bid_rate;
    newPro.start_date = req.body.start_date;
    newPro.end_date = req.body.end_date;
    // newPoll.answers = req.body.answers;
    newPro.save(function(err,insertedPro){
        if(err){
            console.log("Error " + err);
        }else{
         

            res.json(insertedPro);
        }
    })

});


//var async = require('async');


router.put('/bid_a_product',passport.authenticate('jwt',{session:false}),function(req,res){

    console.log(req.body);

    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.substring(4),
            decoded;
            try {
                decoded = jwt.verify(authorization, config.secret);
                console.log(decoded);
                Product.findOneAndUpdate({"_id" : req.body.pid},
                {
                    $push:{"bidders": {user_id: decoded._id, amount:req.body.amount }}
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


// router.get('/closed_products',(req,res,next)=>{
//     Product.getAllCloasedProduct((err,poll)=>{
//         if(err) throw err;
//         return res.json(poll);
//     });
// });

router.get('/upcoming_products',(req,res,next)=>{
    Product.getAllUpcomingProduct((err,product)=>{
        if(err) throw err;
        return res.json(product);

    })
    
});

// router.get('/closed_products',(req,res,next)=>{
//     Product.getAllClosedProduct((err,products)=>{
//         if(err) throw err;

//         products.forEach(function(product) {
//             product.bidders.forEach(function(bidder) {
//                 adTimes.push(friend.adTime);
//             });
//         });
//         return res.json(products);
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
    Product.getProductById(req.params.id,(err,poll)=>{
        if(err) throw err;
        return res.json(poll);
    })
});


router.put('/update/:id',function(req,res){
//    console.log(req);
   pro.findByIdAndUpdate(req.params.id,
    {
        $set : {name: req.body.name, desc : req.body.desc, bid_amount : req.body.bid_amount, min_bid_rate : req.body.min_bid_rate, start_date : req.body.start_date, end_date : req.body.end_date  }
    },
    {
    new :true
    },
    function(err, updatedPro){
        if(err){
            res.send("error updating product");
        }else{
            res.json(updatedPro);
        }
    }

   )
});



router.put('/updatedel/:id',function(req,res){
    //    console.log(req);
       pro.findByIdAndUpdate(req.params.id,
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
        // console.log(products[0].start_date);
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
    // console.log("s");
    Product.getMyAuctionProduct(req.params.id,(err,products)=>{
        if(err) throw err;
        return res.json(products);
    })
});

router.put('/updateInterested/:id',(req,res,next)=>{
    // console.log("s");
    Product.updateInterested(req.params.id,(err,products)=>{
        if(err) throw err;
        return res.json(products);
    })
});
module.exports = router;
