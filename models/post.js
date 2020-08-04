const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,

  },
  imdb: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Post', postSchema);