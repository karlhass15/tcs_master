var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/consciousshopperdb');
mongoose.model('Store', new Schema({"name": String, "address": String, "description": String, "categories": Array, "website": String, "image": String}, {collection: 'stores'}));
var Store = mongoose.model('Store');
////

//"categories": Array,

    app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/////
app.post('/data', function(req,res){
    console.log(req);
    var addedStore = new Store({
        "name" : req.body.storename,
        "address" : req.body.address,
        "description" : req.body.description,
        "categories" : req.body.categories,
        "website" : req.body.website,
        "image" : req.body.image
    });

    addedStore.save(function(err, data){
        if(err) console.log(err);
        res.send(data);
    });
});
//////



app.use('/', index);

app.listen(app.get('port'), function(){
    console.log("Listening on port: ", app.get('port'));

});


//
//
//
//
//
//var express = require('express');
//var app = express();
//var path = require('path');
//var bodyParser = require('body-parser');
//
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//mongoose.connect('mongodb://localhost/mongo_lecture');
//mongoose.model('Person', new Schema({"name": String, "location": String}, {collection: 'people'}));
//var Person = mongoose.model('Person');
//
//app.set("port", process.env.PORT || 5000);
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({expanded: true}));
//
//app.get('/data', function(req,res){
//    var query = req.query.peopleSearch;
//
//    if(query){
//        Person.find({"name" : query}, function(err, data){
//            if(err){
//                console.log("ERROR! : ", err);
//            }
//            res.send(data);
//        });
//    } else {
//        Person.find({}, function(err, data){
//            if(err){
//                console.log("ERROR! : ", err);
//            }
//            res.send(data);
//        });
//    }
//});
//
//app.post('/data', function(req,res){
//    console.log(req);
//    var addedPerson = new Person({
//        "name" : req.body.peopleAdd,
//        "location" : req.body.locationAdd
//    });
//
//    addedPerson.save(function(err, data){
//        if(err) console.log(err);
//        res.send(data);
//    });
//});
//
//app.delete('/data', function(req,res){
//    console.log(req.body.id);
//
//    Person.findByIdAndRemove({"_id" : req.body.id}, function(err, data){
//        if(err) console.log(err);
//        res.send(data);
//    });
//
//
//});
//
//app.get("/*", function(req,res){
//    var file = req.params[0] || "/views/index.html";
//    res.sendFile(path.join(__dirname, "./public", file));
//});
//
//app.listen(app.get("port"), function(){
//    console.log("Listening on port: ", app.get("port"));
//});
