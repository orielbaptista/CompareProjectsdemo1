const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const jwt = require('jsonwebtoken');


dotenv.config();

const app = express();
app.use(express.json());

//use cors as middleware
app.use(cors({
  origin: 'http://localhost:3000',//Replace with the URL of your frontend application
  methods: ['GET', 'POST', 'PUT', 'DELETE'],// allow specific methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'],// allow specific headers if needed
}));


app.get('/', (req, res) => res.send('server running!'));// route to test server

//import routes 
//use the auth routes
app.use('/api/auth', authRoutes);



//connect to database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Protected Developer Page Route
app.get('/api/developer', (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) return res.status(403).json({ message: 'No token provided' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Invalid token' });
  
      res.json({ message: 'Welcome to your profile', developerId: decoded.developerId });
    });
  });


//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
