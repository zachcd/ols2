const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./User').schema;

const playerSchema = new Schema({
  name: String,
	elo: Number,
  team: String,
  user: userSchema
});

module.exports = mongoose.model('Player', playerSchema);
