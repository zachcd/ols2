const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

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
	admin: [{ type: Schema.Types.ObjectId, ref: 'Organization'}],
	team: { type: Schema.Types.ObjectId, ref: 'Team'},
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Player'}]
});
userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);
