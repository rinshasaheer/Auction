const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

module.exports = mongoose.model('user',userSchema,'user');

module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password,salt,(err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })

}