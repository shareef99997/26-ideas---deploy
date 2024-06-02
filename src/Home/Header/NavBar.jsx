import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar({ currentPage }) {
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
          <a href="/">
            <img src={require('../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <a href="/" > الرئيسية </a>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <a href="/about-us" >من نحن</a>
          </li>
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <a href="/services" >خدماتنا</a>
          </li>
          <li className={`${currentPage === 'store' ? 'active' : ''}`}>
            <a href="http://www.nextech-sa.com" target="_blank" >متجرنا</a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <a href="/join-us" >انضم الينا</a>
          </li>
          <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
            <a href="/blog" >المدونة</a>
          </li>
          <li className={`cbl ${currentPage === 'contact-us' ? 'active' : ''}`}>
            <a href="/contact-us">
              <button className="Contact-btn" > اطلب عرض سعر </button>
            </a>
          </li>
        </ul>
        <div className="Cont">
          <a href="/contact-us">
            <button className="Contact-btn" id='Contact-btn'> اطلب عرض سعر  </button>
          </a>
        </div>
        <div className="lang">
          <a className="en">
            العربية
          </a>
          <div className="lang-dropdown">
            <a href="/en/" > 
              <a>
                English
              </a>
            </a> 
          </div>
        </div>
        <div className={`burger-menu ${menuOpen ? 'toggle' : ''} ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
