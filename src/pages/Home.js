import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import your CSS file if you have styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Gallery from '../components/Gallery'; 
import Contact from '../components/Contact'; 
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
//import Button from '../components/Button';

function Home() {

  // const navigate = useNavigate();

  // const handleViewPropertiesClick = () => {
  // navigate('/properties');

     const navigate = useNavigate();
    const handleViewPropertiesClick = () => {
      navigate('/properties');
    };
    

  return (
    <div>

      {/* Banner Section */}
      {/* <div className="banner">
        <p className="moving-text">
          Compare now! | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compare now! | Lorem ipsum dolor sit amet...
        </p>
      </div> */}

      {/* Landing Section */}
<section id="home" className="landing-section">
      <div className="overlay">
        <div className="content">
          <h1>Find Your Dream Property</h1>
          <p>Explore the finest properties in your area with us.</p>

          {/* Button */}
          <button className='home-button' onClick={handleViewPropertiesClick}>
            Click Me
          </button>
          

          {/* Search Bar */}
          <div>
              <SearchBar />
            </div>
          
        </div>
      </div>
    </section>


      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h1>Our Team</h1>
            <p>We are a dedicated team, passionate about connecting you with your ideal property.</p>
          </div>
        </div>
      </section>

      
      <section>
        <HeroSection />
      </section>

      

      {/* Gallery Section */}
      <section>
        <Gallery />
      </section>

      {/* Contact Section */}
      <section>
        <Contact />
      </section>

    </div>
  );
}

export default Home;
