// anochat-server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  interests: [String],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  online: { type: Boolean, default: false },
});

UserSchema.methods.hashPassword = async function() {
  this.password = await bcrypt.hash(this.password, 8);
};

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    await this.hashPassword();
  }
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;