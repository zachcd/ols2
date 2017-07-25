const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  ign: String,
	elo: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Player', playerSchema);
