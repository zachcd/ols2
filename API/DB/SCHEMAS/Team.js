import mongoose from 'mongoose';
const Schema = mongoose.Schema

const teamSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  players: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  games: [{type: Schema.Types.ObjectId, ref: 'Game'}]
})
module.exports = mongoose.model('Team', teamSchema)
