const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
	owner: String,
	players: [String]
});

module.exports = mongoose.model('Team', teamSchema);
