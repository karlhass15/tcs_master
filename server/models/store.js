var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/consciousshopperdb');
mongoose.model('Store',
    new Schema({"name": String,
                "address": String,
                "description": String,
                "categories": Array,
                "latlong": Array,
                "website": String,
                "image": String,
                "loc": Object},
                {collection: 'stores'}));

module.exports = mongoose.model('Store');
