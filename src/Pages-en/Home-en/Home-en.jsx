/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './Home.css';
import HEADER_EN from './Header-en/Header-en';
import SERVICES_EN from './Services-en/Services-en';
import OFFERS_EN from './Offers-en/Offers-en';
import ABOUT_EN from './About-en/About-en';
import FOOTER_EN from '../Home-en/Footer-en/Footer-en';
import STORE_EN from '../Home-en/Store-en/Store-en';
import CONTACT_EN from '../Home-en/Contact-en/Contact-en';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';



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
    <div className="Home" lang="en">
      <LoadingScreen/>
      <HEADER_EN />
      <ABOUT_EN />
      <SERVICES_EN />
      <OFFERS_EN />
      <STORE_EN />
      <CONTACT_EN />
      <FOOTER_EN />
    </div>
  );
}

export default Home;
