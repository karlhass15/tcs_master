var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('./strategies/user');
var session = require('express-session');
var localStrategy = require('passport-local');


var index = require('./routes/index');
var store =  require('./routes/addStore');

app.set("port", process.env.PORT || 5000);

app.use(session({
    secret: 'secret',
    key: "user",
    resave : true,
    saveUninitialized : false,
    cookie: {maxAge:6000, secure: false}
}));

//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

var mongoURI = "mongodb://localhost:27017/consciousshopperdb";

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err) console.log("MONGO ERROR: ", err);
});

mongoDB.once('open', function(){
    console.log("Connected to Mongo, meow!");
});

app.use('/addStore', store);
app.use('/', index);

app.listen(app.get('port'), function(){
    console.log("Listening on port: ", app.get('port'));

});
