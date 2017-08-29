const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  url: { type: String, required: true, unique: true },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  tournaments: [{type:Schema.Types.ObjectId, ref: 'Tournament'}]
});
organizationSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Organization', organizationSchema);
