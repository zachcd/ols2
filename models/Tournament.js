const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  playoffs: Object,
  schedule: Object,
  matches: Object,
  divisions: Object
});

module.exports = mongoose.model('Tournament', tournamentSchema);
