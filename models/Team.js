const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./Player').schema;

const teamSchema = new Schema({
  name: String,
	owner: playerSchema,
	players: [playerSchema]
});

module.exports = mongoose.model('Team', teamSchema);
