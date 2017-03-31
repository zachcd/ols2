let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	isOwner: Boolean,
	isPlayer: Boolean,
	isAdmin: Boolean,
	ign: String,
	elo: Number,
	team: String
});
console.log('user registered');
module.exports = mongoose.model('User', userSchema);
