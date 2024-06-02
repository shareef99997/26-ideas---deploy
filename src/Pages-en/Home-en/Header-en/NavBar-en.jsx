import React, { useState, useEffect } from 'react';

import './NavBar.css';

function NavBar_en({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className={`logo ${scrolled ? 'scrolled-logo' : ''}`}>
          <a href="/en/">
            <img src={require('../../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <a href="/en/">Home</a>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <a href="/en/about-us">About Us</a>
          </li>
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <a href="/en/services">Services</a>
          </li>
          <li className={`${currentPage === 'store' ? 'active' : ''}`}>
            <a href="http://www.nextech-sa.com" target="_blank">Store</a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <a href="/en/join-us">Join Us</a>
          </li>
          <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
            <a href="/en/blog">Blog</a>
          </li>
          <li className={`cbl ${currentPage === 'contact-us' ? 'active' : ''}`}>
            <a href="/en/contact-us">
              <button className="Contact-btn">Request a Quote</button>
            </a>
          </li>
        </ul>
        <div className="Cont">
          <a href="/en/contact-us">
            <button className="Contact-btn">Request a Quote</button>
          </a>
        </div>
        <div className="lang" id='lang'>
        
          <a  className="en">
            English
          </a>
        
          <div className="lang-dropdown">
          <a href="/" > 
            <a>
              العربية
            </a>
          </a> 
          </div>
        </div>
        <div className={`burger-menu ${menuOpen ? 'toggle' : ''} ${scrolled ? 'scrolled' : ''}`} id='burger-menu' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar_en;
