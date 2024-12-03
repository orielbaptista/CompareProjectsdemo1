
const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  // previous_otp: {type:Number},
  // otpExpiration: {type:Date}
});

module.exports = mongoose.model('Developer', developerSchema);
