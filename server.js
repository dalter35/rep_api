var express = require('express');
var db = require("./db");
var User = require("./models/models").User;

var app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

db.connect("mongodb://localhost/rep_api", function(){
	console.log('connected');
});

app.get('/api/users', function(req, res){
    User.find({}, function(err, _users){
        res.send(_users)
    });
});

app.get('/api/users/:id', function(req, res){
    User.findOne({_id: req.params.id}, function(err, _user){
        res.send(_user);
    })
})

app.listen(process.env.PORT);