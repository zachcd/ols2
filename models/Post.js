// This is a code snippet, not used for production.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  comments: [{
      text: String,
      postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
  }]
});

module.exports = mongoose.model('Post', postSchema);
