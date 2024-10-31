import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/propertiesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faSwimmingPool,
  faDumbbell,
  faParking,
  faWifi,
  faSnowflake,
  faShieldAlt,
  faChild,
  faTree,
  faLightbulb,
  faSchool,
  faUtensils,
  faShoppingCart,
  faBus,
} from '@fortawesome/free-solid-svg-icons';
import './PropertyPage.css';
import Carousel from './Carousel';
import CaroforPage
 from './CaroforPage';

function PropertyPage() {
  const { id } = useParams();
  const property = propertiesData.find((property) => property.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');

  if (!property) {
    return <h2>Property not found</h2>;
  }

  // Define icons for amenities
  const amenitiesIcons = {
    swimmingPool: faSwimmingPool,
    gym: faDumbbell,
    parking: faParking,
    wifi: faWifi,
    'children Play Area': faChild,
    airConditioning: faSnowflake,
    garden: faTree,
    'Private Garden': faTree,
    security: faShieldAlt,
    'Power Backup': faLightbulb,
  };

  // Define icons for facilities
  const facilitiesIcons = {
    'Nearby Schools': faSchool,
    Restaurants: faUtensils,
    'Shopping Centers': faShoppingCart,
    'Public Transport': faBus,
    'Private Garden': faTree,
  };

  return (
    <div className="property-page">
      {/* Header Section */}
      <div className="property-header">
        <div className="left-section">
          <h1 className="property-title">{property.title}</h1>
          <p className="property-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {property.location}
          </p>
          <p className="property-agent">{property.agent}</p>
        </div>
        <div className="right-section">
          <h2 className="property-price">₹{property.price}</h2>
          <p className="property-availability">
            <FontAwesomeIcon icon={faCalendarAlt} /> Available From: {property.availableFrom}
          </p>
        </div>
      </div>
     

      {/* Image and Contact Section */}
      <div className="property-details-container">
        <div className="property-image-container">
          {/* <img src={property.image} alt={property.title} className="property-image" /> */}
          <CaroforPage media={property.media} />
        </div>

        {/* Contact Seller Section */}
        <div className="contact-seller">
          <h5>Contact Seller</h5>
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
        {['overview', 'description', 'amenities', 'facilities', 'gallery', 'location', 'floorplan'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
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
            <ul className="amenities-list">
              {property.amenities.map((amenity, index) => (
                <li key={index} className="amenity-item">
                  <FontAwesomeIcon icon={amenitiesIcons[amenity]} /> {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'facilities' && (
          <div className="tab-section">
            <ul className="facilities-list">
              {property.facilities.map((facility, index) => (
                <li key={index} className="facility-item">
                  <FontAwesomeIcon icon={facilitiesIcons[facility]} /> {facility.charAt(0).toUpperCase() + facility.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="tab-section">
            <Carousel images={property.galleryImages} />
          </div>
        )}
        
        {activeTab === 'location' && (
          <div className="tab-section location-section">
          <div className="map-container">
            <iframe
              src={property.mapLink}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-container">
            <p><strong>Address:</strong></p>
            <p>{property.address}</p>
          </div>
        </div>
        )}

        {activeTab === 'floorplan' && (
          <div className="tab-section">
            {/* <p>{property.description}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyPage;
