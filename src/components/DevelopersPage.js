 
 import React from "react";
 //import axios from "axios";
 import { Navigate, useNavigate } from "react-router-dom";
 import './DevelopersPage.css'
 const DevelopersPage = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };



 return (
  <div>
    <h1>Welcome to the Developers Page!</h1>
      <p>This is a members-only section accessible only to logged-in users.</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      {/* Your members-only page content goes here */}
  </div>
 );


 };

 export default DevelopersPage;