import React, { useState, useEffect } from 'react';
import './Contact.css'
import propertiesData from '../data/propertiesData';

function Contact ()  {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    city: '',
    locality: '',
    cost: ''
  });

  // State to store unique values for city, locality, and cost
  const [cities, setCities] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [costs, setCost] = useState([]);

  // Effect to extract unique cities, localities, and cost
  useEffect(() => {
    const uniqueCities = [...new Set(propertiesData.map((property) => property.city))];
    const uniqueLocalities = [...new Set(propertiesData.map((property) => property.locality))];
    const uniqueCosts = [...new Set(propertiesData.map((property) => property.cost))];

    setCities(uniqueCities);
    setLocalities(uniqueLocalities);
    setCost(uniqueCosts);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the functionality to send form data to a backend or an API
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact">
      <div className="container_contact">
        
        
          {/* Left Column: Form */}
          <div className="form-column">
            <h2>Send us a Message</h2>
            <form className="sendForm" id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="firstName">Full Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />



              {/* Dropdown for City */}
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {/* Dropdown for Locality */}
            <label htmlFor="locality">Locality</label>
            <select
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
            >
              <option value="">Select Locality</option>
              {localities.map((locality, index) => (
                <option key={index} value={locality}>
                  {locality}
                </option>
              ))}
            </select>

            {/* Dropdown for Price */}
            <label htmlFor="cost">Price</label>
            

              

              <button className="sendButton" type="submit" id="sendButton">
                Send
              </button>
            </form>
          </div>

          

        </div>
      
    </section>
  );
};

export default Contact;
