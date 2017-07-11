import mongoose from 'mongoose';
const Schema = mongoose.Schema

const tournamentSchema = new Schema({
  organization: { type: Schema.Types.ObjectId, ref: 'Organization'},
  teams: [{type: Schema.Types.ObjectId, ref: 'Team'}],
  schedule: Schema.Types.Mixed
})
module.exports = mongoose.model('Tournament', tournamentSchema)
