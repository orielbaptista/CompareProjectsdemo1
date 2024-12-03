// hashPasswords.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Developer = require('../src/backend/models/Developer'); // Adjust path if needed
const path = require('path'); // specify path to the .env file

dotenv.config({ path: path.resolve(__dirname, '../src/backend/.env') });

mongoose.set('debug', true);

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

const hashAllPlainTextPasswords = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/authlogi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 90000, // 6 second timeout
      socketTimeoutMS: 60000, // 45 second timeout
    });
    console.log('Connected to MongoDB for the hashing thing');
    console.log("MongoDB URL", process.env.MONGODB_URI);

    // Find all developers with plain-text passwords
    const developers = await Developer.find();
    for (const developer of developers) {
      // Check if the password is already hashed
      if (developer.password.length < 20) { 
        console.log(`Hashing password for user: ${developer.username}`);

        // Hash the plain-text password
        const hashedPassword = await bcrypt.hash(developer.password, 10);

        // Update the developer's password in the database
        developer.password = hashedPassword;
        await developer.save();
        console.log(`Password hashed and updated for user: ${developer.username}`);
      } else {
        console.log(`Password already hashed for user: ${developer.username}`);
      }
    }

    console.log('All plain-text passwords have been hashed and updated!');
  } catch (error) {
    console.error('Error hashing passwords:', error);
  } finally {
    mongoose.connection.close();
  }
};

hashAllPlainTextPasswords();
