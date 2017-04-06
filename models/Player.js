const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
	elo: Number,
	isOwner: Boolean,
  team: String
});

module.exports = mongoose.model('Player', playerSchema);
