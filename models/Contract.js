const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
	players: [String],
	startingBid: Number
});

module.exports = mongoose.model('Contract', contractSchema);
