import mongoose from 'mongoose';

const User = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'users' });

export default mongoose.model('User', User);
