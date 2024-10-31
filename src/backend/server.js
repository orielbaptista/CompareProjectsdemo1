const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

//routes
app.use('/routes/authRoutes', authRoutes);

//protected route example


//????????is this the problem????????? 
// if the port is a prob change in .env file
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
