const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./Player').schema;
const userSchema = require('./User').schema;

const teamSchema = new Schema({
  name: String,
	owner: [userSchema],
	players: [playerSchema]
});

module.exports = mongoose.model('Team', teamSchema);
