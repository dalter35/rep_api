var express = require('express');
var db = require("./db");

var app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

db.connect("mongodb://localhost/rep_api", function(){
	console.log('connected');
})

app.listen(process.env.PORT);