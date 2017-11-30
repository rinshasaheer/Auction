const mongoose = require("mongoose");
const config = require("../config/database");

const ProductsSchema = mongoose.Schema({
        name: {
            type : String,
            require : true,
        },
        image: {
            type : String,
        },
        desc: {
            type : String,
        },
        bid_amount: {
            type : Number,
            require : true,
        },
        min_bid_rate: {
            type : Number,
            deafult: 0
        },
        start_date : {
            type : Date,
            require:true
        },
        end_date : {
            type : Date,
            require:true
        },
        date_time : {
            type : Date,
            default: Date.now
        },
        intrested_ids: [{
            user_id: String ,
            date_time : { 
                type : Date, 
                default: Date.now
            } 
        }],
        bidders: [{
            user_id: String ,
            amount: Number,
            date_time : { 
                type : Date, 
                default: Date.now
            }, 
            bid_status : { 
                type : String, 
                default: "participated"
            } 
        }],
        is_bid_completed : {
            type: Boolean,
            default: false
        },
        starting_informed :{
            type: Boolean,
            default: false
        },
        closing_informed :{
            type: Boolean,
            default: false
        }
       
});

const Product = module.exports = mongoose.model('Product', ProductsSchema);

module.exports.addProduct = function(product,callback){
    console.log(product);
    var newProduct = new Product(product);
    newProduct.save(callback);
}

module.exports.getAllProduct = function(callback){
    Product.find({},callback);
}
module.exports.getAllClosedProduct = function(callback){
    // console.log(new Date);
    // Product.find({"end_date" : {"$lt" : new Date()}},callback);
    Product.find({"end_date" : {"$lt" : Date()}, "bidders.bid_status": { "$ne": "rejected"}},callback);
}
module.exports.getAllUpcomingProduct = function(callback){
    Product.find({"start_date" : {"$gt" : Date()}},callback);
}

module.exports.deleteProduct = function(id,callback){
    const query = {_id: id}
    Product.remove(query,callback);
}

module.exports.getProductById = function(id,callback){
    Product.findOne({_id: id},callback);
}

module.exports.getUpcomingAuctionProduct = function(callback){
    // console.log("q");
    Product.find({"start_date" : {"$gt" : new Date()}},callback);
}

module.exports.getFinishedAuctionProduct = function(callback){
    // pipeline : any;
    // console.log(ISODate());
    // pipeline = [
    //     {
    //         "$match":{
    //             "end_date" : {"$lt" : new Date()},
    //             // "bidders.bid_status": {"$ne":"rejected"}
    //         }
    //     },
        // {
        //     "$unwind":"$bidders"
        // },
        // {
        //     "$match": {            
                
        //     }
        // },
        // {
        //     $sort:{"bidders.amount":-1}
        // },
        // {
        //     "$group": {
        //         _id: null,
        //         // "maxamount": { $max: 'bidders.amount'},
        //         "amount": { $max: bidders.amount } 
        //     }
        // },
        // {
        //     "$limit" : 1
        // }
        
        
    // ];
    // Product.aggregate(pipeline,callback);
    Product.find({"end_date" : {"$lt" : new Date()}},callback);
    // Product.find({is_bid_completed: true},callback);
    // Product.find({}, {$pull:{"bidders.bid_status":  "rejected"}},callback);
    // Product.aggregate({ $group: { _id: null, "bidders.bid_status": { $max: '$balance' }}},
    // { $project: { _id: 0, maxBalance: 1 }},callback);
    // Product.find({$or:
    //     [
    //     {'subjects':{"$elemMatch":{'bid_status':'confirmed'}}}
    //     ]
    //     })
}

module.exports.getHighestBid = function(id, callback){
    Product.find({"_id": id, "bidders.bid_status":  { "$ne": "rejected"}},callback);
}

module.exports.getMyAuctionProduct = function(id, callback){
    console.log("fhg");
//     Product.aggregate([
//    {
//     $project: {
//         bidders: {
//           $filter: {
//              input: "$bidders",
//              as: "bidders",
//              cond: { 'userid':id }
//           }
//        }
//     }
//  }
// ], callback)
    // Product.find({"bidders.userid" : id}, {bidders: {$elemMatch: {userid: id}}}, callback);
    Product.find({
        "bidders.userid" : id
        }, {bidders:{$slice: 1}}, callback);
}