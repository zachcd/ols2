import mongoose from 'mongoose';
const Schema = mongoose.Schema

const franchiseSchema = new Schema({
  sponsor: { type: Schema.Types.ObjectId, ref: 'User'},
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team'}]
})
module.exports = mongoose.model('Franchise', franchiseSchema)
