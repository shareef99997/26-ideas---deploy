import './App.css';
import Home from './Home/Home';
import AboutUs from './Pages/About-us/About-us'; // Use consistent naming conventions
import Services from './Pages/Services/Services';
import Store from './Pages/Store/Store';
import JoinUs from './Pages/Join-us/Join-us';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/Contact-us/Contact-us';

import Home_en from './Pages-en/Home-en/Home-en.jsx';
import AboutUs_en from './Pages-en/Pages-en/About-us-en/About-us-en.jsx'; // Use consistent naming conventions
import Services_en from './Pages-en/Pages-en/Services-en/Services-en.jsx';
import JoinUs_en from './Pages-en/Pages-en/Join-us-en/Join-us-en.jsx';
import Blog_en from './Pages-en/Pages-en/Blog-en/Blog-en.jsx';
import ContactUs_en from './Pages-en/Pages-en/Contact-us-en/Contact-us-en.jsx';

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
        return <Home_en />;
      case '/en/about-us':
        return <AboutUs_en />;
      case '/en/services':
        return <Services_en />;
      case '/en/join-us':
        return <JoinUs_en />;
      case '/en/blog':
        return <Blog_en />;
      case '/en/contact-us':
        return <ContactUs_en />;
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
      <a className={`up-arrow ${scrolled ? 'scrolled-arrow' : ''}`} onClick={scrollToHeader}>
        <div className="arrow-button">
          <img src={require('./Assets/Icons/up-arrow.png')} alt="Up Arrow" />
        </div>
      </a>
    </div>
  );
}

export default App;
