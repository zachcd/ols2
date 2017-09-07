const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	isOwner: Boolean,
	isPlayer: Boolean,
	isAdmin: Boolean,
	token: String,
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: String,
	email: String,
	team: { type: Schema.Types.ObjectId, ref: 'Team'},
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Player'}]
});

module.exports = mongoose.model('User', userSchema);
