var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    photo: String,
    totalUpvotes: {type: Number, default: 0},
	totalDownvotes: {type: Number, default: 0}
});

var User = mongoose.model('User', UserSchema);

module.exports = {
    User : User
}