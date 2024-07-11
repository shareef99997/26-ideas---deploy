import React, { useEffect, useRef } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Services.css'
import SERVICES from '../../Home/Services/Services';
import OFFERS from '../../Home/Offers/Offers';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

function Services() {  
  
  
  const MarketRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

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
      leftSection.dataset.animation = 'fade-in-left';
      observer.observe(leftSection);
    }
  
    if (rightSection) {
      rightSection.classList.add('hidden');
      rightSection.dataset.animation = 'fade-in-right';
      observer.observe(rightSection);
    }
  
    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
    };
  }, []);

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



  return (
    <div className="Services-page " id="Services-page" lang="ar">

        <NavBar currentPage="services"/>

        <div className="Services-Header Page-Header">
          <div className='page-header-spacer'></div>
          <div className="Page-Title-Wrapper"><h2 className="Page-Title"> خدماتنا </h2></div>
        </div>
      
        {/* Page Body */}
        <div className='Services-Page-Body Page-Body'>

          <section className="Services-About-content">
            <div className="Services-right-section" ref={rightSectionRef}>
              <h1> خدمات مبتكرة لتلبية جميع احتياجاتك التقنية </h1>
                <p>             
                في 26 فكرة لتقنية المعلومات، نقدم مجموعة واسعة من الخدمات التي تناسب جميع احتياجاتك التقنية. نحن هنا لنساعدك على تحقيق أهدافك من خلال حلول مخصصة تلبي توقعاتك وتتفوق عليها. سواء كنت تبحث عن تطوير برمجيات مخصصة، أو تحسين تواجدك الإلكتروني، أو الاستفادة من أحدث تقنيات الذكاء الاصطناعي، نحن الشريك الذي يمكنك الاعتماد عليه.
              </p>
            </div>
            <div className="Services-left-section" ref={leftSectionRef}>
              <img src={require('../../Assets/Pages-images/Services.jpg')} alt="About 1" />
            </div>
            
          </section>

          <SERVICES />

          <section className="Market" id="Market" ref={MarketRef}>
            {/* Title Section */}
            <h1 className='Market-Title fade-in-element hidden'> خدماتنا التسويقية </h1>
            <p className="Market-Description fade-in-element hidden">
                تعرف على خدماتنا التسويقية 
            </p>
            {/* Title Section */}

            {/* Grid Section */}
              <div className="Markets-Grid fade-in-element hidden">
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div market-pic'lang="en">
                      <h3> التسويق الإلكتروني </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> ادارة صفحات الويب </li>
                          <li> ادارة صفحات التواصل الأجتماعي </li>
                          <li>التسويق المباشر</li>
                        </ul>
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div data-pic'lang="en">
                      <h3> تحليل البيانات </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> تحليل البيانات التسويقة </li>
                            <li> تحليل بيانات السوق الموازي </li>
                            <li> تحليل البيانات المالية </li>
                          </ul>
                    </div>         
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div manage-pic'lang="en">
                      <h3> إدارة المشاريع </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                          <ul>
                            <li> تطوير المشاريع </li>
                            <li> وضع خطط استراتيجية </li>
                            <li> دراسة جدوى المشاريع </li>
                          </ul>                
                    </div>
                  </div>
                  <div className="Market-Box fade-in-element hidden">
                    <div className='Title-div ad-pic'lang="en">
                      <h3> دعاية و إعلان </h3>
                      <i className="hover-icon fas fa-mouse-pointer"></i>
                    </div>
                    <div className="List-Div">
                        <ul>
                          <li> تصميم اعلانات و دعاية </li>
                          <li>تصميم فيديوهات للدعاية والأعلان</li>
                          <li> تصميم جرافيك </li>
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

export default Services;