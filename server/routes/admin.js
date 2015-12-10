var express = require('express');
var adminRouter = express.Router();
var path = require('path');



adminRouter.get('/*', function(req, res){
    var file = req.params[0] || "assets/views/admin.html";
    res.sendFile(path.join(__dirname, "../public/", file))
});



module.exports = adminRouter;