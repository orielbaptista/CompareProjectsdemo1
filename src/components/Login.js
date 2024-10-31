import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import developers from '../components/DevelopersPage'
import './Auth.css'; // Assuming you will create an Auth.css file for styles
import axios from 'axios';

const Login= () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/src/components/login', { name, password });
      // Store the token (you may use localStorage or context)
      //check for successful response
      if(response.data.token){
      localStorage.setItem('token', response.data.token);// Store JWT in localStorage
      navigate('/deveopers'); 
}
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Login failed:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Login failed: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Login failed:', error.message);
      }
    }
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here (e.g., API call)
  //   // If successful, redirect to login page
  //   navigate('/developers'); // Redirect to login page after sign up
  // };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Username" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
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
        <div className="form-group">
          <label>
            <input type="checkbox" />Remember Me
          </label>
        </div>
        <button type="submit" className="btn">Login</button>
        <Link to="/signup" className="link">Don't have an account? Sign Up</Link>
        <Link to="/forgot-password" className="link">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
