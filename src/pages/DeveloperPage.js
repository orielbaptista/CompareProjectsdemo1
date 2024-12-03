// src/pages/DeveloperPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeveloperPage = () => {
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login'; // Redirect to login if no token
      return;
    }

    axios.get('/api/developer', { headers: { Authorization: token } })
      .then((response) => setDeveloper(response.data))
      .catch(() => {
        window.location.href = '/login'; // Redirect if token is invalid
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (!developer) return <div>Loading...</div>;

  return (
    <div>
      <h2>Welcome, {developer.username}</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Display developer profile and properties here */}
   
      </div> ); };
export default DeveloperPage;