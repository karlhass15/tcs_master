var express = require('express');
var router = express.Router();
var path = require('path');
var Store = require('../models/store');

router.post('/', function(req,res){
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

router.get('/', function(req, res){
    console.log("Here is the req: ", req);
    Store.find({$and: [{address: "123 Fake Street"}, {categories: {$elemMatch: {category : "Eco-Friendly"}}}]}, function(err, data){
        if (err){
            console.log("Error in the query!: ", err);
        }
        res.send(data);
    });
});

module.exports = router;