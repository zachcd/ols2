const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./Player').schema;
const userSchema = require('./User').schema;

const teamSchema = new Schema({
  name: String,
	owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
	players: [{ type: Schema.Types.ObjectId, ref: 'Player'}]
});

module.exports = mongoose.model('Team', teamSchema);
