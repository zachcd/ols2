let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	isOwner: Boolean,
	isPlayer: Boolean,
	isAdmin: Boolean,
	elo: Number,
	team: String,
  accounts: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);
