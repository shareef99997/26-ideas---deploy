import React, { useEffect, useRef } from 'react';
import './Services.css'

import OFFERS from "../../Home-en/Offers-en/Offers-en";
import SERVICES from "../../Home-en/Services-en/Services-en";
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';

function Services_en() {  
  
  const MarketRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            // Optionally stop observing once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const MarketSection = MarketRef.current;
    const children = MarketSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;
  
    if (leftSection) {
      leftSection.classList.add('hidden');
      leftSection.dataset.animation = 'fade-in-right';
      observer.observe(leftSection);
    }
  
    if (rightSection) {
      rightSection.classList.add('hidden');
      rightSection.dataset.animation = 'fade-in-left';
      observer.observe(rightSection);
    }
  
    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
    };
  }, []);

  return (
    <div className="Services-page " id="Services-page" lang="en">

        <NavBar currentPage="services"/>
        <div className="Services-Header Page-Header Page-Header-en">
          <div className='page-header-spacer'></div>
          <div className="Page-Title-Wrapper"><h2 className="Page-Title Page-Title-en"> Our Services </h2></div>
        </div>
      
        {/* Page Body */}
        <div className='Services-Page-Body Page-Body'>

        <section className="Services-About-content">
            <div className="Services-right-section" ref={rightSectionRef}>
              <h1> Innovative services to meet all your technical needs </h1>
                <p>             
                At 26 Ideas IT, we offer a wide range of services to suit all your technology needs. We are here to help you achieve your goals with customized solutions that meet and exceed your expectations. Whether you're looking for custom software development, improving your online presence, or taking advantage of the latest AI technology, we're the partner you can count on.
                </p>
            </div>
            <div className="Services-left-section Services-left-section-en" ref={leftSectionRef}>
              <img src={require('../../../Assets/Pages-images/Services.jpg')} alt="About 1" />
            </div>
            
          </section>

        <SERVICES />  

          <section className="Market" id="Market" ref={MarketRef}>
            {/* Title Section */}
            <h1 className='Market-Title fade-in-element hidden'> Our Marketing Services </h1>
            <p className="Market-Description fade-in-element hidden">
                Discover our marketing services
            </p>
            {/* Title Section */}

            {/* Grid Section */}
              <div className="Markets-Grid fade-in-element hidden">
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div market-pic'lang="en">
                      <h3> Digital Marketing </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> Web page management </li>
                          <li> Social media management </li>
                          <li>Direct marketing</li>
                        </ul>
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div data-pic'lang="en">
                      <h3> Data Analysis </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> Marketing data analysis </li>
                            <li> Parallel market data analysis </li>
                            <li> Financial data analysis </li>
                          </ul>
                    </div>         
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div manage-pic'lang="en">
                      <h3> Project Management </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> Project development </li>
                            <li> Strategic planning </li>
                            <li> Project feasibility study </li>
                          </ul>
                          </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div ad-pic'lang="en">
                      <h3> Advertising </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> Advertisement design </li>
                          <li> Advertising video design </li>
                          <li> Graphic design </li>
                        </ul>
                    </div>
                  </div>
              </div>
            {/* Grid Section */}
          </section>

          <OFFERS />  

        </div>
        
        <Contact />
        <Footer />
    </div>
  );
}

export default Services_en;
