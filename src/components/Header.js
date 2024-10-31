import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoo from '../images/logo.png';
import './Header.css'; // Assuming you have a Header.css for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


function Header() {

  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scrolling to sections
  const handleScrollToSection = (section) => {
    navigate('/'); // Navigate to the homepage first
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 100); // Slight delay to ensure navigation happens first
  };

  

  return (
    <header  id='home' className="home">
      <nav className="navbar">
        <div className="logo">
        <img className="logo-img" src={logoo} alt="compareProjects" />
        </div>

        <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>&#9776;</div>

        <ul className={`nav-items ${isMenuOpen ? 'show-menu' : ''}`} id="nav-items">
          {/* Link the Home and About sections as anchor links */}

          <div className="nav-center">
          <li><button className="nav-link" onClick={() => handleScrollToSection('home')}>Home</button></li>
          {/* <li><button className="nav-link" onClick={() => handleScrollToSection('about')}>About</button></li> */}
          <li><Link to="/properties" className="nav-link" >Property</Link></li>{/* Use Link for Property and Compare pages */}
          <li><button className="nav-link" onClick={() => handleScrollToSection('contact')}>Contact</button></li>
          </div>


          <div className="nav-right">
            <li><Link to="/compare" className="compare-btn">Compare</Link></li>
            
            <li className="nav-dev-item">
              <Link to="/login" className="nav-link-deveopers">
                <span className="nav-icon" >
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <span className="popup-text">Developers</span>
              </Link>
            </li>
          </div>
          
          


        </ul>
      </nav>
    </header>


 );
}

export default Header;