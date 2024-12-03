
// src/pages/LoginPage.js
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './Auth.css'
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
 // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setIsOtpSent(true);
      setErrorMessage('');
      console.log(response.data.message);
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      setErrorMessage(
        error.response?.data?.message || 'An error occurred during login.'
      )
    
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    console.log('log brfore API call Username:', username);
    console.log('OTP:', otp);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/verifyOtp', { username: username, otp: otp });
      console.log('OTP verified:', response.data);

      //localStorage.setItem('token', response.data.token);
      window.location.href = '/developer'; // Redirect to Developer Page

    } catch (error) {
      console.error('OTP verification error:', error);
      console.error('OTP verification error:',error.response ? error.response.data.message : error.message); 
      setErrorMessage(
        error.response?.data?.message || 'An error occurred during OTP verification'
      );
    }
  };

  return (
    <div className='auth-container'>
  
  {!isOtpSent ? (
    <form className='auth-form' onSubmit={handleLogin}>
      <h2 className='auth-title'>Developer Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className='btn' type="submit">Login</button>
    </form>
  ) : (
    <form className='auth-form' onSubmit={handleVerifyOtp}>
      <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <button className='btn' type="submit">Verify OTP</button>
    </form>
  )}
  {errorMessage && <p>{errorMessage}</p>}
</div>
  );
};

export default LoginPage;
