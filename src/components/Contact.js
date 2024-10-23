import React, { useState } from 'react';
import './Contact.css'

function Contact ()  {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

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
