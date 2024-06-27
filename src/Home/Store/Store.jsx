import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import './Store.css';

function Store() {
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
      img: require('../../Assets/Products-Images/Door.webp'),
      title: 'Hikvision محطة باب وحدات للفيلا',
      price: '438  ر.س ',
      url: 'https://store.26ideas.sa/ar/wWRxEPx'
    },
    {
      img: require('../../Assets/Products-Images/EZVIZ.webp'),
      title: ' EZVIZ EZVIZ كاميرا عرض الباب بدون اسلاك DP2 مع جرس باب مدمج، شاشة لمس ملونة CS-DP2-R100-6E3WPFBS ',
      price: '450  ر.س ',
      url: 'https://store.26ideas.sa/ar/NKdRljD'
    },
    {
      img: require('../../Assets/Products-Images/dashcam1.webp'),
      title: ' Hikvision كاميرا مراقبة السيارات AE-DC5113-F6S ',
      price: ' 375 ر.س ',
      url: ' https://store.26ideas.sa/ar/lGEXgzW '
    },
    {
      img: require('../../Assets/Products-Images/alexa.webp'),
      title: ' Ezviz كاميرتين مراقبة خارجية بالبطارية تعمل مع اليكسا و مساعد جوجل BC1-B2 ',
      price: ' 960 ر.س ',
      url: ' https://store.26ideas.sa/ar/lGEXoRV '
    },
    {
      img: require('../../Assets/Products-Images/cam1.webp'),
      title: ' EZVIZ كاميرا لاسلكي، ابيض خارجية CS-H8C-R100-1K2WKFL-B40 ',
      price: ' 204 ر.س ',
      url: ' https://store.26ideas.sa/ar/BrmGWOl '
    },
    {
      img: require('../../Assets/Products-Images/POS1.webp'),
      title: '  Capacitive Touch Screen POS Ture flat screen ',
      price: ' 1,930 ر.س ',
      url: ' https://store.26ideas.sa/ar/GYpnYbb '
    },
    {
      img: require('../../Assets/Products-Images/Barcode.webp'),
      title: ' TA-288 2D BARCODE SCANNER HQ ',
      price: ' 110 ر.س ',
      url: ' https://store.26ideas.sa/ar/EZmglAp '
    },
    {
      img: require('../../Assets/Products-Images/smart-home.webp'),
      title: ' مجموعة محطة الاتصال الفيديو الداخلي بباب المنزل ',
      price: ' 668 ر.س ',
      url: ' https://store.26ideas.sa/ar/NKBzGgb '
    },
    {
      img: require('../../Assets/Products-Images/disk.jpg'),
      title: ' WESTERN DIGITAL 10TB PURPLE SATA INTERNAL HARD DRIVE - HDD ',
      price: ' 1,174 ر.س ',
      url: ' https://store.26ideas.sa/ar/KjrENYV '
    },
    {
      img: require('../../Assets/Products-Images/gate.webp'),
      title: ' بوابة دخول الافراد RFID smart card identification single wing gate ',
      price: ' 8,560 ر.س ',
      url: ' https://store.26ideas.sa/ar/mQjmrYy '
    },

  ];

  return (
    <div className="Store" id="Store" ref={storeRef}>
      <h1 className="Store-Title section-title fade-in-element hidden"> أبرز منتجاتنا </h1>
      <p className="Store-Description section-description fade-in-element hidden">
        تعرف على ابرز منتجات متجرنا
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
                  <i className="fas fa-shopping-basket" lang="en"></i> إستعرض المنتج
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="BButton-Container fade-in-element hidden">
        <a href="https://store.26ideas.sa/" target="_blank" rel="noopener noreferrer">
          <button className="Learn-More-Button-Store"> تسوق الآن </button>
        </a>
      </div>
    </div>
  );
}

export default Store;
