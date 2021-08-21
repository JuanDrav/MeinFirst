const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = Schema({
  name: String,
  lastName: String,
  password: String,
  citizenNumber: Number,
  gender: { type: String, enum: ['male', 'female'] },
});

module.exports = mongoose.model('User', UserSchema);
