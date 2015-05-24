var mongoose = require('mongoose');
var User = require("./models/models").User;

module.exports = {
    connect: connect
};

function connect(conn, cb){

    mongoose.connect(conn);
    
    mongoose.connection.once('open', function(err) {
        cb();
    });
};