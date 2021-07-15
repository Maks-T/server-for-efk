import mongoose from 'mongoose';

const Login = new mongoose.Schema({
  login: String,
}, { collection: 'logins' });

export default mongoose.model('Login', Login);
