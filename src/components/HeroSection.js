import React, { useState } from 'react';
import './HeroSection.css'; // Assuming styles are in this file

const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle function to handle dropdown reveal
  const toggleParagraph = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='contain'>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Dream Property Awaits</h1>
          <p>Explore the finest properties designed to suit your needs.</p>
          <div className="arrow-container" onClick={toggleParagraph}>
            <span className="down-arrow">{isActive ? '▲' : '▼'}</span>
          </div>
        </div>
      </section>

      {/* Paragraph content section that toggles based on isActive */}
      <section className={`hidden-content ${isActive ? 'active' : ''}`} id="hiddenParagraph">
        <p>
          At our platform, you’ll find a wide variety of properties that match your unique
          preferences—whether you’re looking for an urban apartment or a serene countryside villa.
          Start your journey by exploring our listings.
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
