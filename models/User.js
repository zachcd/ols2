const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
	isOwner: Boolean,
	isPlayer: Boolean,
	isAdmin: Boolean,
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
userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);
