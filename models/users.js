const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = Schema({
  name: String,
  last_name: String,
  password: String,
  citizen_number: Number,
  gender: { type: String, enum: ['male', 'female'] },
});

module.exports = mongoose.model('User', UserSchema);
