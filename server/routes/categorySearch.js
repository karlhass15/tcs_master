var express = require('express');
var router = express.Router();
var Store = require('../models/store');

router.get('/', function (req, res){
    console.log("We've received a category search request!");
    res.send("Success");
});
//router.get('/', function(req, res){
//    console.log("Here is the req.query: ", req.query);
//    Store.aggregate([{$geoNear: {near: [parseFloat(req.query.lng), parseFloat(req.query.lat)], distanceField: "distance", spherical: true, limit: 3 }}],
//        function(err, data) {
//            if (err) {
//                console.log("Error in the query!: ", err);
//            }
//            res.send(data);
//        });
//});

module.exports = router;



//{$and: [{address: "3736 17th Ave S, Minneapolis, MN 55407"}, {categories: {$elemMatch: {category : "Eco-Friendly"}}}]}