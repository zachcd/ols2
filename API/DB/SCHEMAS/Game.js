import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  red:[{ type: Schema.Types.ObjectId, ref: 'Summoner'}],
  blue: [{{ type: Schema.Types.ObjectId, ref: 'Summoner'}}],
  gameVersion: String,
  teamStats: [Schema.Types.Mixed],
  playerStats: [Schema.Types.Mixed],
  gameDuration: Number,
  gameCreation: Date
})

module.exports = mongoose.model('Game', gameSchema)
