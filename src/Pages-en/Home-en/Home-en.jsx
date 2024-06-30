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
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-7FGQSVRQH8';
    document.head.appendChild(gtagScript);

    // Add the gtag function
    const gtagInnerScript = document.createElement('script');
    gtagInnerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7FGQSVRQH8');
    `;
    document.head.appendChild(gtagInnerScript);

    // Create the script element for Snap Pixel
    const snapScript = document.createElement('script');
    snapScript.async = true;
    snapScript.src = 'https://sc-static.net/scevent.min.js';
    document.head.appendChild(snapScript);

    // Add the snap pixel function
    const snapInnerScript = document.createElement('script');
    snapInnerScript.innerHTML = `
      (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
      {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
      a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
      r.src=n;var u=t.getElementsByTagName(s)[0];
      u.parentNode.insertBefore(r,u);})(window,document,
      'https://sc-static.net/scevent.min.js');

      snaptr('init', 'c3797e09-8d45-4e99-acea-3e298d6d739f', {
        'user_email': '__INSERT_USER_EMAIL__'
      });

      snaptr('track', 'PAGE_VIEW');
    `;
    document.head.appendChild(snapInnerScript);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(gtagInnerScript);
      document.head.removeChild(snapScript);
      document.head.removeChild(snapInnerScript);
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
