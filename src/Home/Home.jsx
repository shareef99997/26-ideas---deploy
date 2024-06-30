/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Home.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import HEADER from './Header/Header';
import ABOUT from './About/About';
import SERVICES from './Services/Services';
import OFFERS from './Offers/Offers';
import STORE from './Store/Store';
import CONTACT from '../Home/Contact/Contact';
import FOOTER from '../Home/Footer/Footer';


function Home() {

  // Google analytics
  useEffect(() => {
    // Create the script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-7FGQSVRQH8';
    document.head.appendChild(script);

    // Add the gtag function
    const scriptInner = document.createElement('script');
    scriptInner.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7FGQSVRQH8');
    `;
    document.head.appendChild(scriptInner);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(scriptInner);
    };
  }, []);

  return (
    <div className="Home" lang="ar">
      <LoadingScreen />
      <HEADER />
      <ABOUT />
      <SERVICES />
      <OFFERS />
      <STORE />
      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default Home;
