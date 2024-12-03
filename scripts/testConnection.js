const mongoose = require('mongoose');
require('dotenv').config({ path: './src/backend/.env' }); // Adjust if necessary

console.log("Testing MongoDB URI:", process.env.MONGODB_URI);

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log("Connection successful!");
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    mongoose.connection.close();
  }
}

testConnection();
