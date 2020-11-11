const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  name:  String,
  description: String,
  tags: [String],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meme', memeSchema);
