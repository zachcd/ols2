const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  playoffs,
  schedule,
  matches,
  divisions
});

module.exports = mongoose.model('Tournament', tournamentSchema);
