/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Home from './Home/Home';
import AboutUs from './Pages/About-us/About-us'; // Use consistent naming conventions
import Services from './Pages/Services/Services';
import Store from './Pages/Store/Store';
import JoinUs from './Pages/Join-us/Join-us';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/Contact-us/Contact-us';

import HOME_EN from './Pages-en/Home-en/Home-en.jsx';
import ABOUTUS_EN from './Pages-en/Pages-en/About-us-en/About-us-en.jsx'; 
import SERVICES_EN from './Pages-en/Pages-en/Services-en/Services-en.jsx';
import JOINUS_EN from './Pages-en/Pages-en/Join-us-en/Join-us-en.jsx';
import BLOG_EN from './Pages-en/Pages-en/Blog-en/Blog-en.jsx';
import CONTACTUS_EN from './Pages-en/Pages-en/Contact-us-en/Contact-us-en.jsx';

import React, { useState, useEffect } from 'react';


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [animateWhatsApp, setAnimateWhatsApp] = useState(false);

  const scrollToHeader = () => {
    const header = document.getElementById('Header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 400); // You can adjust the scroll offset value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateTimer = setTimeout(() => {
      setAnimateWhatsApp(true);
      const revertTimer = setTimeout(() => {
        setAnimateWhatsApp(false);
      }, 2000); // Revert after 2 seconds
      return () => clearTimeout(revertTimer);
    }, 5000); // Animate after 3 seconds

    return () => clearTimeout(animateTimer);
  }, []);

  const renderPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/about-us':
        return <AboutUs />;
      case '/services':
        return <Services />;
      case '/store':
        return <Store />;
      case '/join-us':
        return <JoinUs />;
      case '/blog':
        return <Blog />;
      case '/contact-us':
        return <ContactUs />;
      case '/en/':
        return <HOME_EN />;
      case '/en/about-us':
        return <ABOUTUS_EN />;
      case '/en/services':
        return <SERVICES_EN />;
      case '/en/join-us':
        return <JOINUS_EN />;
      case '/en/blog':
        return <BLOG_EN />;
      case '/en/contact-us':
        return <CONTACTUS_EN />;
      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="Home">
      {renderPage()}
      <a className="whatsappa" href="https://api.whatsapp.com/send?phone=966566664530" target="_blank" rel="noopener noreferrer">
        <nav className={`whatsapp-button ${animateWhatsApp ? 'animate' : ''}`}>
          <div>
            <img src={require('./Assets/Icons/whatsapp.png')} alt="WhatsApp" />
          </div>
          <h3> Whatsapp </h3>
        </nav>
      </a>
      <button className={`up-arrow ${scrolled ? 'scrolled-arrow' : ''}`} onClick={scrollToHeader}>
        <div className="arrow-button">
          <img src={require('./Assets/Icons/up-arrow.png')} alt="Up Arrow" />
        </div>
      </button>
    </div>
  );
}

export default App;
