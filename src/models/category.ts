import mongoose from 'mongoose';

const Category = new mongoose.Schema(
  {
    nameCategory: { type: String, required: true },
    nameRouter: { type: String, required: true },
    words: { type: Array, required: true },
  },
  { collection: 'categories' }
);

export default mongoose.model('Category', Category);
