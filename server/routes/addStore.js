//Variable declarations
var express = require('express');
var router = express.Router();
var Store = require('../models/store');

//Adding a new store to the Database
router.post('/', function(req,res){
    console.log(req);
    var addedStore = new Store({
        "name" : req.body.storename,
        "address" : req.body.address,
        "description" : req.body.description,
        "categories" : req.body.categories,
        "latlong" : req.body.latlong,
        "website" : req.body.website,
        "image" : req.body.image,
        "loc" : {type: "Point", coordinates: [req.body.latlong[1], req.body.latlong[0]]}
    });

    addedStore.save(function(err, data){
        if(err) console.log(err);
        addedStore.createIndex({loc : "2dsphere"});
        res.send(data);
    });
});


//Search Criteria for a hard-coded category. Do we want to move this to a new route? Need to add variables for geolocation and entered
//category search criteria
router.get('/', function(req, res){
    console.log("Here is the req.query: ", req.query);
    Store.find({loc : {$near: {
        $geometry: {
            type: "Point",
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        $maxDistance: 50000
    }
    }}, function(err, data){
        if (err){
            console.log("Error in the query!: ", err);
        }
        res.send(data);
    });
});

module.exports = router;

//Search criteria for two search values; will be needed for the category search page
//{$and: [{address: "3736 17th Ave S, Minneapolis, MN 55407"}, {categories: {$elemMatch: {category : "Eco-Friendly"}}}]}