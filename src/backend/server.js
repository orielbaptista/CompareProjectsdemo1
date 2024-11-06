const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); //serve  for static files

//const developersRoutes = require('./routes/developersRoutes');

dotenv.config();

const app = express();
app.use(express.json());// middleware to parse json bodies
app.use(cors());//middleware to allow cross-origin requests


app.get('/', (req, res) => res.send('server running!'));// route to test server

//routes
//app.use('/routes/authRoutes', authRoutes);
// Use the authRoutes for authentication-related endpoints
app.use('/api/auth', authRoutes);

//protected route example
//app.use('/api/developers',developersRoutes);

//connect to database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Serve static files from the React app


//start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
