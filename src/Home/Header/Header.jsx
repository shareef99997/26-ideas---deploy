import React from 'react';
import './Header.css';
import NavBar from './NavBar';

function Header() {


  return (
    <header className="Home-Header" id="Header" >
      <video autoPlay muted loop className="header-video">
        <source src={require('../../Assets/Videos/IT-Background (online-video-cutter.com).mp4')} />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <NavBar currentPage="home"/>
      <div className="Header-Body">
        <div className="home-content">
          <h1>خطوتك الأولى نحو مستقبلك الرقمي</h1>
          <p> اكتشف الابتكار الذي لا حدود له مع حلولنا التقنية المتقدمة، حيث نجمع بين خبراتنا العميقة في تطوير البرمجيات وأحدث تقنيات الذكاء الاصطناعي لتقديم تجربة فريدة في التجارة الإلكترونية والاستشارات.</p>

          <a href="/contact-us"><button >إتخذ خطوتك الآن</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
