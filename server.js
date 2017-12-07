const express = require("express");
const path = require("path");

const users = require("./routes/user");
const products = require("./routes/products");

const bodyParser = require("body-parser");
const passport = require('passport');
var session = require('express-session');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/database");
const http = require("http");

mongoose.connect(config.database);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected',()=>{
    console.log("database connected");
});
mongoose.connection.on('error',(err)=>{
    console.log("database Error" + err);
});

const app = express();


const port = 3000;

app.use(cors());

// app.use(function(req, res, next) { //allow cross origin requests
    
//             res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    
//             res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
//             res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
//             res.header("Access-Control-Allow-Credentials", true);
    
//             next();
    
//         });
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { secure: true } }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',users);
app.use('/products',products);
app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email'}));
app.get('/auth/facebook/callback',passport.authenticate('facebook'),
function(req, res) {
    return res.redirect("/socialmedia/" + req.user._id);
        });
app.get('/auth/google',passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'profile', 'email'] }));
// {successRedirect: '/registration', failureRedirect: '/login' } in login
app.get('/auth/google/callback', passport.authenticate('google'),
 function(req, res) {
    return res.redirect("/socialmedia/" + req.user._id);
        });




    



app.use('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/', (req,res)=>{
    res.send("Invalid end point");
});

app.listen(port,() => {
    console.log("Server Started On Port " + port);

});