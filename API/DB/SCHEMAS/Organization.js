import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  tournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament'}],
  admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  players: [{type:Schema.types.ObjectId, ref: 'User'}]
})

module.exports = mongoose.model('Organization', orgSchema)
