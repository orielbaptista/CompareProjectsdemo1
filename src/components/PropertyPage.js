// src/pages/PropertyPage.js
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/propertiesData';

// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
// import 'swiper/css'; // Correct import for Swiper styles
// import 'swiper/css/navigation'; // For navigation buttons (optional, if you're using them)
// import 'swiper/css/pagination'; // For pagination (optional, if you're using it)
// import { Navigation } from 'swiper/modules';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRulerCombined, faBed, faBath, faCar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
//import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './PropertyPage.css'

function PropertyPage() {
  // Get the property ID from the URL parameters
  const { id } = useParams();
  
  // Find the property in the propertiesData array by ID
  const property = propertiesData.find((property) => property.id === parseInt(id));
 
  // Manage the active tab state
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-page">
    {/* Header Section */}
    <div className="property-header">
        <div className="left-section">
          <h1 className="property-title">{property.title}</h1>
          <p className="property-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {property.location}
          </p>
        </div>
        <div className="right-section">
          <h2 className="property-price">₹{property.price}</h2>
          <p className="property-availability">
            <FontAwesomeIcon icon={faCalendarAlt} /> Available From: {property.availableFrom}
          </p>
        </div>
      </div>


      {/* Image Carousel Section */}
      {/* <div className="property-image-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}// Make sure Navigation is imported and used properly here
        >
          {property.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Property Image ${index + 1}`} className="property-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

   {/* Image and Contact Section */}
   <div className="property-details-container">
        <div className="property-image-container">
          <img src={property.image} alt={property.title} className="property-image" />
        </div>

        {/* Contact Seller Section */}
        <div className="contact-seller">
          {/* <h3>Contact Seller</h3> */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

    {/* Tab Navigation */}
    <div className="tabs-container">
        <button
          onClick={() => setActiveTab('overview')}
          className={activeTab === 'overview' ? 'active' : ''}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('description')}
          className={activeTab === 'description' ? 'active' : ''}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('amenities')}
          className={activeTab === 'amenities' ? 'active' : ''}
        >
          Amenities
        </button>
        <button
          onClick={() => setActiveTab('facilities')}
          className={activeTab === 'facilities' ? 'active' : ''}
        >
          Facilities
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="tab-section">
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Parking: {property.parkings}</p>
            <p>Area: {property.area} Sqft</p>
            <p>Units Available: {property.unitsAvailable}</p>
            <p>Floor: {property.floor}</p>
            <p>Remaining Units: {property.remainingUnits}</p>
          </div>
        )}
        {activeTab === 'description' && (
          <div className="tab-section">
            <p>{property.description}</p>
          </div>
        )}
        {activeTab === 'amenities' && (
          <div className="tab-section">
            <ul>
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'facilities' && (
          <div className="tab-section">
            <ul>
              {property.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyPage;
