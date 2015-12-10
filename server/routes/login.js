var express = require('express');
var adminRouter = express.Router();
var path = require('path');
var passport = require('passport');



adminRouter.get('/', function(req, res){
    var file = "assets/views/login.html";
    res.sendFile(path.join(__dirname, "../public/", file))
});

adminRouter.post('/',
    passport.authenticate('local', {
        successRedirect: '/assets/views/admin.html',
        failureRedirect: '/assets/views/failure.html'
    })
);

//req.params[0] ||

module.exports = adminRouter;