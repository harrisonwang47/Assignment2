var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
    "ig_id" : { type: String},
    "sc_id" : { type: String},
	"ig_access_token" : { type: String },
	"sc_access_token" : { type: String}
});

//userSchema.plugin(findOne);
exports.User = mongoose.model('User', userSchema);

