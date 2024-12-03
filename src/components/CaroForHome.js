import React from 'react';
import Slider from 'react-slick';
import { FaBed, FaBath, FaCar, FaPhoneAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './CaroForHome.css';
import propertiesData from '../data/propertiesData';

const NextArrow = ({ onClick }) => (
  <div className="arrow next-arrow" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CaroForHome = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="caro">
    <div className="carousel-container-small">
      <Slider {...settings}>
        {propertiesData.map((property) => (
          <div key={property.id} className="carousel-item-small">
            <img src={property.coverimage} alt={property.title} />
            <div className="carousel-caption-small">
              <h3>{property.title}</h3>
              <span className="agent-badge">{property.agent}</span>
              <p>Location: {property.location}</p>
              <p>Price: {property.price}</p>
              <p>Area: {property.area} sq ft</p>
              <div className="carousel-icons">
                <p><FaBed /> {property.bhk} BHK</p>
                <p><FaBath /> {property.bathrooms} Baths</p>
                <p><FaCar /> {property.parkings} Parking</p>
              </div>
              <button className="contact-button">
                <FaPhoneAlt /> Contact
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CaroForHome;
