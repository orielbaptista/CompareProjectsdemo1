import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyCard.css'; // Ensure you have your CSS in a separate file
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faWallet, faBed, faCouch, faRulerCombined, faCodeCompare, faPhone, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

function PropertyCard({ property, addToCompare, goToComparePage, onRemove, cardType }) {
  const navigate = useNavigate();

  const handleCompare = () => {
    if (typeof addToCompare === 'function') {
      addToCompare(property);
    }

    if (typeof goToComparePage === 'function') {
      goToComparePage();
    }
  };

  // Function to handle card click and navigate to PropertyPage
  const handleCardClick = () => {
    navigate(`/property/${property.id}`);  // Navigate to the property page with the property ID
  };


  return (
    <div className={`property-card ${cardType === 'compare' ? 'compare-card' : "default-card"}`}  
    onClick={handleCardClick} data-id={property.id} data-location={property.location} data-price={property.cost} data-bhk={property.bhk} data-type={property.type}>
      {/* Close Button */}
      {onRemove && (
        <button className="close-button" onClick={(e) => { e.stopPropagation(); onRemove(property.id); }}>
          <span>&times;</span>
        </button>
      )}

      <div className="card-image-container">
        <span className="badge badge-pill badge-danger">{property.status}</span>
        <img src={property.coverimage} alt="Property" />
      </div>
      <div className="property-details">
        <h1 className="property-title">{property.title}</h1>
        <h2 className="property-price">{property.price}</h2>
        {/* <p className="property-description">{property.description}</p> */}
        <p className="property-agent">{property.agent}</p>
        <div className="property-info">
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faHandHoldingDollar} />
            <span>₹{property.cost}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faLocationDot} />
            <span>{property.location}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faWallet} />
            <span>{property.pricePerSqFt}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faBed} />
            <span>{property.bhk} bd.</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faBed} />
            <span>{property.furnished ? 'Furnished' : 'Unfurnished'}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className='custom-icon' icon={faRulerCombined} />
            <span>{property.area} Sq.</span>
          </div>
        </div>


        <div className="actions">
          {cardType !== 'compare' && (
            <button 
              className="compare-action-button" 
              onClick={(e) => {
                e.stopPropagation();
                handleCompare();
              }}
            >
              <FontAwesomeIcon className="compare-custom-btn-icon" icon={faCodeCompare} />
              Compare
            </button>
          )}
          <button className="contact-action-button">
            <FontAwesomeIcon className="contact-custom-btn-icon" icon={faPhone} />
            Contact Seller
          </button>
        </div>


      </div>
    </div>
  );
};

export default PropertyCard;
