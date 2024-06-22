/* eslint-disable jsx-a11y/anchor-is-valid */
import './Offers.css';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


function Offers_en() {
  const servicesRef = useRef(null);

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

  return (
    <div className="Offers" id="Offers" ref={servicesRef}>
      {/* Title Section */}
      <h2 className='Offers-Title fade-in-element hidden'>Our Offers</h2>
      <p className="Offers-Description fade-in-element hidden">
        Discover our offers
      </p>
      {/* Title Section */}

      {/* Slider Section */}
      <section className="Offers-Slider-section fade-in-element hidden">
        <div className="img-wrapper">
          <a href="/en/contact-us">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay={{
                delay: 6500, // 2.5 seconds delay between slides
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Scrollbar]} // Include required modules
            >
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../../Assets/Images/banner-1.jpg')} alt="AI Illustration 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../../Assets/Images/banner-2.jpg')}alt="AI Illustration 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../../Assets/Images/banner-3.jpg')} alt="AI Illustration 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='Offers-pic' src={require('../../../Assets/Images/banner-4.jpg')} alt="AI Illustration 3" />
                </SwiperSlide>
            </Swiper>
          </a>
        </div>
      </section>
      {/* Slider Section */}

      <div className="Button-Container fade-in-element hidden">
        <a className='link' href="/en/contact-us">
          <button className="Learn-More-Button">Request Your Service Now</button>
        </a>
      </div>
    </div>
  );
}

export default Offers_en;
