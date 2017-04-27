const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
	players: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
	startingBid: Number
});

module.exports = mongoose.model('Contract', contractSchema);
