import React from 'react';
import './Header.css';
import NAVBAR_EN from './NavBar-en';


function Header_en() {

  return (
    <header className="Home-Header" id="Header" >
      <video autoPlay muted loop className="header-video">
        <source src={require('../../../Assets/Videos/IT-Background (online-video-cutter.com).mp4')} />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <NAVBAR_EN currentPage="home"/>
      <div className="Header-Body">
        <div className="home-content">
          <h1>Your first step towards your digital future</h1>
          <p>
          We are here to provide you with the best modern technical solutions. Whether you are looking for software development, e-commerce, or technical consulting, we are here to serve you.</p>
          <a href="/en/contact-us"><button >  Take your step now </button></a>
        </div>
      </div>
    </header>
  );
}

export default Header_en;
