const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: String,
  description: String,
  admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  tournaments: [{type:Schema.Types.ObjectId, ref: 'Tournament'}]
});

module.exports = mongoose.model('Tournament', tournamentSchema);
