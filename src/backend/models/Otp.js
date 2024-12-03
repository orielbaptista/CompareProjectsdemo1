// models/Otp.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  username: { type: String, required: true },
  otp: { type: Number, required: true },
  otpExpiration: { type: Date, required: true },
});

module.exports = mongoose.model('Otp', otpSchema);
