import mongoose from 'mongoose';
import { IMeme } from '../types/meme.interface';

const memeSchema = new mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  url: String,
  date: { type: Date, default: Date.now },
});

memeSchema.methods.transform = function transform() {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
};

export default mongoose.model<IMeme>('Meme', memeSchema);
