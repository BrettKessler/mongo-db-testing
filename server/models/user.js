var mongoose = require('mongoose')

var User = mongoose.model('User', {
	userName: {
		type: String,
		require: true,
		trim: true,
		minlength: 1
	},
	email: {
		type: String,
		require: true,
		trim: true,
		minlength: 1
	}
});

module.exports = {User}