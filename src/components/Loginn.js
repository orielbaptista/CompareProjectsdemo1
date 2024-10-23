import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; // Assuming you will create an Auth.css file for styles

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    // If successful, redirect to members area
    navigate('/members'); // Redirect to members area
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <div className="form-group">
          <label>
            <input type="checkbox" /> Remember Me
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
