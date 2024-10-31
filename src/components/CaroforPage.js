import React, { useState } from 'react';
import './CaroforPage.css'; // Make sure to include your CSS for styling

const CaroforPage = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {media.map((item, index) => (
          <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Slide ${index}`} className="carousel-image" />
            ) : item.type === 'video' ? (
              <iframe
                src={item.src}
                className="carousel-video"
                allowFullScreen
                loading="lazy"
                title={`Video ${index}`}
              ></iframe>
            ) : null}
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default CaroforPage;
