const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//signup controller to create a new user
exports.signup = async (req, res) => {
    const {name, email, password} = req.body;// grab data from the request body
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User ({name, email, password: hashedPassword}); //create a new user
        await newUser.save();// save the new user to the database
        res.status(201).json({message: 'User created successfully'});// send a response to the client
    } catch (error) { //if there is an error sends a 400 status code with a message to client
        res.status(400).json({message: 'Error creating user'});
    }
}

//login controller to login a user
exports.login = async (req, res) => {
    const {name, password} = req.body;
    
    try {
        const user =  await User.findOne({name});// find the name in the User schema in database - in the models folder
        if(!user || !(await bcrypt.compare(password,user.password))){// if the user does not exist or the password is incorrect
            return res.status(401).json({message: 'Invalid usename or password'});
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});
    } catch (error) {
        res.status(500).json({message: 'Error logging in'});
    }

    

};

