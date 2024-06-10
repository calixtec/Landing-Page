const mongoose = require ("mongoose");

var usersSchema = mongoose.Schema( {
name: String,
email:String,
phone: String,
} );
module.exports = mongoose.model( 'Contact', usersSchema );
module.exports = mongoose.models.User || mongoose.model('Contact', usersSchema);

