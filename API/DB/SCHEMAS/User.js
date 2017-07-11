import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  isOwner: Boolean,
	isPlayer: Boolean,
	isAdmin: Boolean,
	username: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
  cards: [{type: Schema.Types.ObjectId, ref: 'Cards'}]
});

module.exports = mongoose.model('User', userSchema)
