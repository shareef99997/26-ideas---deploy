import React, { useEffect, useRef } from 'react';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function About() {
  
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const logoRef = useRef(null);

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
    const logo = logoRef.current;
  
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
  
    if (logo) {
      logo.classList.add('hidden');
      logo.dataset.animation = 'fade-in-top';
      observer.observe(logo);
    }
  
    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
      if (logo) observer.unobserve(logo);
    };
  }, []);

  return (
    <div className="About" id="About" >
      <div className='About-Body'>
        
        <div className="About-content">

          <section className="left-section" ref={leftSectionRef}>
            <div className="img-wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 3500, // 3 seconds delay between slides
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar]} // Include required modules
              >
                <SwiperSlide>
                  <img className='About-pic' src={require('../../Assets/Images/Ai.jpg')} alt="AI Illustration 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='About-pic' src={require('../../Assets/Images/development.jpg')} alt="AI Illustration 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='About-pic' src={require('../../Assets/Images/project-management-about.jpg')} alt="AI Illustration 3" />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="right-section" ref={rightSectionRef}>
            <h2> نقدم لك أفضل الحلول للتقنية الحديثة</h2>
            <p> نحن ملتزمون بتزويدك بأرقى الحلول التقنية التي تلبي جميع احتياجاتك.  الرقمية، كل ذلك لضمان تحقيق أهدافك التكنولوجية. نستخدم أحدث تقنيات الذكاء الاصطناعي لتحليل البيانات وصنع القرارات الاستراتيجية. دعنا نكون شريكك في استغلال البيانات والأدوات التقنية المتقدمة لتعزيز ذكاء أعمالك. صُممت خدماتنا لجذب العملاء وتعزيز نمو خدماتك التقنية.
            </p>
            <div className="button-container">
              <a href="#Services">
                <button alt='#Services'> تعرف علينا </button>
              </a>
            </div>
          </section>
          
          
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,165.3C672,171,768,149,864,144C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default About;
