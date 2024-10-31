import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; // Assuming you will create an Auth.css file for styles
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/signup', { name, email, password });
      navigate('/login'); // Redirect to login page after sign up
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle signup error
    }
  };
  

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Username" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input 
            type="email" 
            placeholder="Email ID" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <Link to="/login" className="link">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Signup;
