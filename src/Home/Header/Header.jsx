import React, { useRef,useEffect } from 'react';
import './Header.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper/modules';
import NavBar from './NavBar';

function Header() {

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 3100); // 3-second delay
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const slides = [
    {
      img: require('../../Assets/Pages-images/Services.jpg'),
      service_img: require('../../Assets/Images/AI.png'),
      service: " تطوير المواقع "
    },
    {
      img: require('../../Assets/Pages-images/about-us.jpg'),
      service_img: require('../../Assets/Images/AI.png'),
      service: " تطوير التطبيقات "
    },
    {
      img: require('../../Assets/Pages-images/blog.jpg'),
      service_img: require('../../Assets/Images/IT-gif.gif'),
      service: "حلول تقنية المعلومات"
    },
    {
      img: require('../../Assets/Pages-images/join-us.jpg'),
      service_img: require('../../Assets/Images/market.png'),
      service: "التسويق الإلكتروني"
    }
  ];

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const activeSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
    const overlay = activeSlide.querySelector('.overlay');
    overlay.style.backgroundColor = 'rgba(0, 45, 56, 0.825)'; 
    overlay.style.opacity = '0'; 
    setTimeout(() => {
      overlay.style.opacity = '1'; 
    }, 500);


    const textElement = activeSlide.querySelector('.slide-service');
    textElement.classList.remove('slide-in');
    void textElement.offsetWidth; // Trigger reflow
    setTimeout(() => {
      textElement.classList.add('slide-in'); 
    }, 500);

    const imgElement = activeSlide.querySelector('.service-img');
    imgElement.classList.remove('slide-in');
    void imgElement.offsetWidth; // Trigger reflow
    setTimeout(() => {
      imgElement.classList.add('slide-in'); 
      
    }, 500);
    
  };

  return (
    <header className="Home-Header" id="Header">
      <NavBar currentPage="home"/>
      <div className="img-slider">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5500, 
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }} 
          modules={[Autoplay, EffectFade]} 
          onSlideChange={handleSlideChange}
          speed={1000}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className='overlay'></div>
                <img className="Header-pic" src={slide.img} alt={`Header  ${index + 1}`} />
                <h2 className="slide-service slide-in">{slide.service}</h2>
                <img className="service-img slide-in" src={slide.service_img}/>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='nav-space'></div>


      <div className="Header-Body">
        <section className="hero-first-section">
          <h1 className="animate">خطوتك الأولى <span className='word'>نحو</span> مستقبلك الرقمي</h1>
          <p className="animate">اكتشف الابتكار الذي لا حدود له مع حلولنا التقنية المتقدمة، حيث نجمع بين خبراتنا العميقة في تطوير البرمجيات وأحدث تقنيات الذكاء الاصطناعي لتقديم تجربة فريدة في التجارة الإلكترونية والاستشارات.</p>
          <a href="/contact-us"><button className="animate">إتخذ خطوتك الآن</button></a>
        </section>
      </div>
      
    </header>
  );
  
}

export default Header;

