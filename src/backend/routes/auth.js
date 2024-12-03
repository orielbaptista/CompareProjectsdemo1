
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
//const twilio = require('twilio');
const Developer = require('../models/Developer');
const Otp = require('../models/Otp');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();

//const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Configure Twilio and Nodemailer
//#####################################################################

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// Helper function to generate OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP different every time
};


// Login Route - authController 
router.post('/login', async (req, res) => {
  console.log('Received login request:',req.body); // Log the request body to the console
  
  const { username, password } = req.body;
  if(!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const developer = await Developer.findOne({ username });
    if (!developer) {
      return res.status(404).json({ message: 'Developer username not found' });
    }
    console.log('Developer found:', developer); // Log the developer object to the console


    // Verify password
    if(password !== developer.password) {
      return res.status(400).json({ message: 'Invalid password: Ensure you have entered the correct password' });
    }
    console.log('Password match result:', password === developer.password); // Log a message to the console

    //!!!!have to do something about secrity the bcrypt is not working even tho it is connected to mongodb developers will have to figure something out


    // const isMatch = await bcrypt.compare(password, developer.password); //bcrypt is changes here
    // console.log('Password match result:', isMatch); // Log a message to the console

    // if (!isMatch) {
    //   return res.status(400).json({ message: 'Invalid password: Ensure you have entered the correct password' });
    // }
    //#####################################################################



    // Generate OTP
    const otp = generateOtp();
    const otpExpiration = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    // Store OTP and expiration time in the database (you can store this in a session or cache too)
    await Otp.create({ 
      username: developer.username,
      otp,
      otpExpiration });

   // Send OTP via email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: developer.email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    });

    // Send OTP via SMS
    // await twilioClient.messages.create({
    //   body: `Your OTP code is ${otp}`,
    //   from: process.env.TWILIO_PHONE,
    //   to: developer.phone,
    // });

    // Notify team
    //(Optional) Implement a function to alert the team via email or any other method
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TEAM_EMAIL,
      subject: 'OTP Generated for Developer Login',
      text: `Developer ${developer.username} has requested an OTP at ${new Date().toLocaleString()}.`,  //note this 
    });

    // Respond with a success message
    res.json({ message: 'OTP sent. Please check your email and SMS' }); //message changed for time being -   
  } catch (error) {
    console.error("Login error:", error.message); // Log the error message to the console
    res.status(500).json({ message: '!!Error loggin in' });
  }
});


//#####################################################################
// OTP Verification Route
router.post('/verifyOtp', async (req, res) => {
  const { username, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ username });//check if user exists

    // if (!otpRecord) {
    //   return res.status(404).json({ message: 'No OTP found for this user' });
    // }

    console.log('OTP from DB:', otpRecord.otp);
    console.log('User=provided:',otp);
    console.log('Expiration:',otpRecord.otpExpiration<Date.now());

    //validate OTP
    // if (!otpRecord || otpRecord.otp !== otp || otpRecord.otpExpiration < Date.now()) { 
    //   return res.status(400).json({ message: 'Invalid or expired OTP' });
    // }
    
    if (otpRecord.otp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }
    
    if (otpRecord.otpExpiration < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }


    await Otp.deleteOne({ username }); // Delete the OTP record after verification
    //await Otp.deleteMany({ otpExpiration: { $lt: Date.now() } });


    

    // Generate JWT token for developerId and send it in the response?
    const token = jwt.sign({ developerId: otpRecord.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });


    res.json({ message: 'OTP verified', token });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
