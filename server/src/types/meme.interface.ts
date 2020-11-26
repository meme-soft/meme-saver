import mongoose from 'mongoose';

export interface IMeme extends mongoose.Document {
  name: String,
  description: String,
  tags: [String],
  url: String,
  date: Date,
  transform(): object,
}
