const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

const UserSchema = mongoose.Schema({
    name : {type : String, required : true, unique : true},
    email : String,
    phone : String,
    password : String,
    block_status : { type: String, default: 'false' },
    delete_status :{ type: String, default: 'false' },
    verified : { type: String, default: 'false' },
    verification_code :String,
    fb_id : String,
    google_id : String,
    date_tym : { type: Date, default: Date.now },
    role : { type: String, default: 'user' },
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(newUser,callback){
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
module.exports.getUsers = function(callback){
    User.find({role:'user'},callback);
}
module.exports.getUserByUsername = function(email,callback){
    const query = { email: email}
    User.findOne(query,callback).lean();
}
module.exports.deleteUser = function(id,callback){
    const query = {_id: id}
    User.remove(query,callback).lean();
}
module.exports.comparePassword = function(candPass,hash,callback){
    bcrypt.compare(candPass,hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}