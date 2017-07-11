import mongoose from 'mongoose';
const Schema = mongoose.Schema

const summonerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  account: [{
    ID: Number,
    name: String
  }]
})
module.exports = mongoose.model('Summoner', summonerSchema)
