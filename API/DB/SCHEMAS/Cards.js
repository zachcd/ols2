import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cardSchema = new Schema({
  summoner: String,
  games: [{ type: Schema.Types.ObjectId, ref: 'Game'}],
  team: { type: Schema.Types.ObjectId, ref: 'Team'},
  border: String,
  achievements: [Schema.Types.Mixed]
})

module.exports = mongoose.model('Card', cardSchema)
