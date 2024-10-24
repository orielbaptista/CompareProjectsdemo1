import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom
import './Button.css'; // Import the CSS file

const Button = () => {

    const navigate = useNavigate(); // Initialize the navigate hook

  // Function to handle the button click
  const handleViewPropertiesClick = () => {
    navigate('/properties'); // Navigate to the properties page
  };



  return (
    <a onClick={handleViewPropertiesClick}  className="btn">Compare Now</a> 
  );
}

export default Button;
