const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

const UserSchema = mongoose.Schema({
    name : {type : String, require : true},
    email :{type : String, require : true, unique : true},
    phone : String,
    password : String,
    block_status : { type: String, default: false },
    delete_status :{ type: String, default: false },
    verified : { type: String, default: false },
    verification_code :String,
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    google         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    },
    date_tym : { type: Date, default: Date.now },
    role : { type: String, default: 'user' },
    address : [{
        pid : String,
        name : String,
        phone : String,
        pin : String,
        addr1 : String,
        addr2 : String,
        addr3 : String,
        addr4 : String,
    }]
});

const User = module.exports = mongoose.model('User', UserSchema,'users');

module.exports.addUser = function(newUser,callback){
    // console.log(newUser);
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password,salt,(err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            
            newUser.save(callback);
        })
    })

}

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}
//all users
module.exports.getUsers = function(callback){
    User.find({role:'user', "delete_status": { "$ne": "true"}, "block_status": { "$ne": "true"}, "verified" : { "$ne": "false"}},callback);
    //User.find({role:'user',verified:'true'},callback);
    // User.find({role:'user',verified:'true'},callback);
   
}
//all disabled users
module.exports.getDisabledUsers = function(callback){
    User.find({role:'user',block_status:'true',delete_status:'false'},callback);
   
}
//all deleted users
module.exports.getDeletedUsers = function(callback){
    User.find({role:'user',delete_status:'true'},callback);
   
}
//delete
module.exports.deleteUser = function(id,callback){
    User.findByIdAndUpdate(id,{delete_status:'true'},callback);
}
//block
module.exports.blockUser = function(id,callback){
    User.findByIdAndUpdate(id,{block_status:'true'},callback);
}
//unblock
module.exports.unblockUser = function(id,callback){
    User.findByIdAndUpdate(id,{block_status:'false'},callback);
}



module.exports.getUsers1 = function(callback){
    User.find({},callback);
}

module.exports.getUserByUsername = function(email,callback){
    const query = { email: email}
    User.findOne(query,callback).lean();
}

//module.exports.comparePassword = function(candPass,hash,callback){

module.exports.comparePassword = function(candPass,hash,callback){
    // console.log(candPass, hash);
    //console.log(candPass, hash);
    bcrypt.compare(candPass,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}

