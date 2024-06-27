import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import './Store-en.css';

function Store_en() {
  const storeRef = useRef(null);

  useEffect(() => {
    if (!storeRef.current) return;

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
      { threshold: 0.1 }
    );

    const storeSection = storeRef.current;
    const children = storeSection.querySelectorAll('.fade-in-element');

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  const products = [
    {
      img: require('../../../Assets/Products-Images/Door.webp'),
      title: 'Hikvision Villa Door Station Unit',
      price: '438 SAR',
      url: 'https://store.26ideas.sa/en/wWRxEPx/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/EZVIZ.webp'),
      title: 'EZVIZ DP2 Wire-Free Door View Camera with Built-in Doorbell, Touchscreen CS-DP2-R100-6E3WPFBS',
      price: '450 SAR',
      url: 'https://store.26ideas.sa/en/NKdRljD/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/dashcam1.webp'),
      title: 'Hikvision Car Surveillance Camera AE-DC5113-F6S',
      price: '375 SAR',
      url: 'https://store.26ideas.sa/en/lGEXgzW/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/alexa.webp'),
      title: 'Ezviz BC1-B2 Battery-Powered Outdoor Cameras Compatible with Alexa and Google Assistant',
      price: '960 SAR',
      url: 'https://store.26ideas.sa/en/lGEXoRV/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/cam1.webp'),
      title: 'EZVIZ CS-H8C-R100-1K2WKFL-B40 Wireless Camera, White Outdoor',
      price: '204 SAR',
      url: 'https://store.26ideas.sa/en/BrmGWOl/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/POS1.webp'),
      title: 'Capacitive Touch Screen POS True Flat Screen',
      price: '1,930 SAR',
      url: 'https://store.26ideas.sa/en/GYpnYbb/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/Barcode.webp'),
      title: 'TA-288 2D Barcode Scanner HQ',
      price: '110 SAR',
      url: 'https://store.26ideas.sa/en/EZmglAp/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/smart-home.webp'),
      title: 'Home Video Intercom Station Set',
      price: '668 SAR',
      url: 'https://store.26ideas.sa/en/NKBzGgb/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/disk.jpg'),
      title: 'WESTERN DIGITAL 10TB PURPLE SATA INTERNAL HARD DRIVE - HDD',
      price: '1,174 SAR',
      url: 'https://store.26ideas.sa/en/KjrENYV/?lang=en'
    },
    {
      img: require('../../../Assets/Products-Images/gate.webp'),
      title: 'RFID Smart Card Identification Single Wing Gate Entry',
      price: '8,560 SAR',
      url: 'https://store.26ideas.sa/en/mQjmrYy/?lang=en'
    }
  ];

  return (
    <div className="Store" id="Store" ref={storeRef}>
      <h1 className="Store-Title section-title fade-in-element">Our Products</h1>
      <p className="Store-Description section-description fade-in-element">
        Discover our top products
      </p>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 3,
          },
        }}
        className="Product-Slider fade-in-element hidden"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="Product-Box">
            <div className="Product-Image-Wrapper">
              <img src={product.img} alt={`Product ${index + 1}`} className="Product-Image" />
            </div>
            <div className="Product-Description">
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <button className="buy-button">
                  <i className="fas fa-shopping-basket" lang="en"></i> View Product
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="BButton-Container fade-in-element hidden">
        <a href="https://store.26ideas.sa/en/" target="_blank" rel="noopener noreferrer">
          <button className="Learn-More-Button-Store">Shop Now</button>
        </a>
      </div>
    </div>
  );
}

export default Store_en;
