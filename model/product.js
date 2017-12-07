const mongoose = require("mongoose");
const config = require("../config/database");
var Schema = mongoose.Schema;



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
            user_id: Schema.ObjectId ,
            date_time : { 
                type : Date, 
                default: Date.now
            } 
        }],
        bidders: [{
            user_id: Schema.ObjectId ,
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
        },
        user_notification : {
            user_id : Schema.ObjectId ,
            status : {
                type : Boolean,
                default : true,
            }
        },
        admin_notification : {
            user_id : Schema.ObjectId ,
            is_viewed : {
                type : Boolean,
                default :false,
            },
        },
        status : {
            type : Boolean,
            default: true
        },
});

const Product = module.exports = mongoose.model('Product', ProductsSchema, 'products');


module.exports.getAllClosedProduct = function(callback){
    // console.log(new Date);
    // Product.find({"end_date" : {"$lt" : new Date()}},callback);
    Product.find({"end_date" : {"$lt" : Date()}, "bidders.bid_status": { "$ne": "rejected"}},callback);
}
module.exports.getAllUpcomingProduct = function(callback){
    Product.find({"start_date" : {"$gt" : Date()}},callback);
}

module.exports.addProduct = function(product,callback){
    console.log(product);
    var newProduct = new Product(product);
    newProduct.save(callback);
}

module.exports.deleteProduct = function(id,callback){
    const query = {_id: id}
    Product.remove(query,callback);
}


module.exports.getAllProduct = function(callback){
    Product.find({status : true},callback);
    // Product.find({status: "true"},callback);
}
module.exports.getProductById = function(id,callback){
    console.log(id);
    Product.findOne({_id : id},callback);
}

module.exports.getUpcomingAuctionProduct = function(callback){
    Product.find({"start_date" : {"$gt" : new Date()}},callback);
}

module.exports.getMyNotification = function(id,callback){
    // console.log("q");
    Product.find({"bidders.user_id":id},callback);
}



module.exports.getFinishedAuctionProduct = function(callback){
    Product.find({"end_date" : {"$lt" : new Date()}},callback);
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

