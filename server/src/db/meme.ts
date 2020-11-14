import mongoose from 'mongoose';

const memeSchema = new mongoose.Schema({
  name:  String,
  description: String,
  tags: [String],
  url: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Meme', memeSchema);
