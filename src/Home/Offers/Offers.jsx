import './Offers.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function Offers() {
  const servicesRef = useRef(null);
  const [swiperAutoplay, setSwiperAutoplay] = useState(true); // State to manage autoplay

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const servicesSection = servicesRef.current;
    const children = servicesSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  const handleMouseEnter = () => {
    setSwiperAutoplay(false); // Pause autoplay on hover
  };

  const handleMouseLeave = () => {
    setSwiperAutoplay(true); // Resume autoplay on mouse leave
  };

  return (
    <div className="Offers" id="Offers" ref={servicesRef}>
      {/* Title Section */}
      <h2 className='Offers-Title fade-in-element hidden'>عروضنا</h2>
      <p className="Offers-Description fade-in-element hidden">
        اكتشف عروضنا
      </p>
      {/* Title Section */}

      {/* Slider Section */}
      <section
        className="Offers-Slider-section fade-in-element hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-wrapper">
          <a href="/contact-us">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay={swiperAutoplay ? {
                delay: 6500,
                disableOnInteraction: false,
              } : false}
              modules={[Autoplay, Navigation, Pagination, Scrollbar]} // Include required modules
            >
              <SwiperSlide>
                <img
                  className='Offers-pic'
                  src={require('../../Assets/Images/banner-1.jpg')}
                  alt="AI Illustration 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='Offers-pic'
                  src={require('../../Assets/Images/banner-2.jpg')}
                  alt="AI Illustration 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='Offers-pic'
                  src={require('../../Assets/Images/banner-3.jpg')}
                  alt="AI Illustration 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='Offers-pic'
                  src={require('../../Assets/Images/banner-4.jpg')}
                  alt="AI Illustration 3"
                />
              </SwiperSlide>
            </Swiper>
          </a>
        </div>
      </section>
      {/* Slider Section */}

      <div className="Button-Container fade-in-element hidden">
        <a className='link' href="/contact-us">
          <button className="Learn-More-Button">اطلب خدمتك الآن</button>
        </a>
      </div>
    </div>
  );
}

export default Offers;
