import mongoose, { model, Schema } from "mongoose";
const Post = mongoose.model('Post', {
  title: String,
  content: String,
  date: Date,
});