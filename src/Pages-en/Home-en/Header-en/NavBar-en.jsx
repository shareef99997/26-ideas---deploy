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
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <div className="nav-content">
        <div className={`logo ${scrolled ? 'scrolled-logo' : ''}`}>
          {/* Change anchor tag to button if it doesn't navigate anywhere */}
          <a href="/en/">
            <img src={require('../../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          {/* Update anchor tags or replace them with buttons */}
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <a href="/en/">Home</a>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <a href="/en/about-us">About Us</a>
          </li>
          {/* Replace anchor tag with button if it doesn't navigate anywhere */}
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <a href="/en/services">Services</a>
          </li>
          {/* Update anchor tag with valid URL or replace it with a button */}
          <li className={`${currentPage === 'store' ? 'active' : ''}`}>
            <a href="https://store.26ideas.sa/en/?lang=en"  rel="noreferrer" target="_blank">Products</a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <a href="/en/join-us">Join Us</a>
          </li>
          <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
            <a href="/en/blog">Blog</a>
          </li>
          {/* Replace anchor tag with button if it doesn't navigate anywhere */}
          <li className={`cbl ${currentPage === 'contact-us' ? 'active' : ''}`}>
            <a href="/en/contact-us">
              <button className="Contact-btn">Contact Us</button>
            </a>
          </li>
        </ul>
        <div className="Cont">
          {/* Replace anchor tag with button if it doesn't navigate anywhere */}
          <a href="/en/contact-us">
            <button className="Contact-btn" id='Contact-btn'>Contact Us</button>
          </a>
        </div>
        <div className="lang" id='lang'>
          <button className="en">
            English
          </button>
          <div className="lang-dropdown">
            <a href="/">العربية</a>
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
