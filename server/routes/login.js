var express = require('express');
var adminRouter = express.Router();
var path = require('path');



adminRouter.get('/', function(req, res){
    var file = "assets/views/login.html";
    res.sendFile(path.join(__dirname, "../public/", file))
});

adminRouter.post('/',
    passport.authenticate('local', {
        successRedirect: '/views/admin.html',
        failureRedirect: '/views/failure.html'
    })
);

//req.params[0] ||

module.exports = adminRouter;