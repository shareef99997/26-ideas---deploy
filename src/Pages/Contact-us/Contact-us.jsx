import React, { useState,useEffect } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Contact-us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';
import emailjs from 'emailjs-com';

library.add(faEnvelope, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok);

function Contact_us() {
  
  // Google analytics
  useEffect(() => {
    // Create the script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-7FGQSVRQH8';
    document.head.appendChild(script);

    // Add the gtag function
    const scriptInner = document.createElement('script');
    scriptInner.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7FGQSVRQH8');
    `;
    document.head.appendChild(scriptInner);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(scriptInner);
    };
  }, []);


  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };
  
  // Add onFocus event handler to capture autofilled values
  const handleAutofill = (e) => {
    const { name, value } = e.target;
    // Check if the value is different from the current form state
    if (formData[name] !== value) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

const handleSubmit = (e) => {
  e.preventDefault();

  // Send the form data using EmailJS
  emailjs.sendForm('Contact-ID', 'contact-template', e.target, 'kQjXhKO0mvsWWtzGA')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('تم الإرسال بنجاح');
      // Reset the form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Email send error:', error.text);
    });
};


  return (
    <div className="Contact-us" id="Contact-us" lang="ar">
      <div className="Contact-us-Header Page-Header">
        <NavBar currentPage="contact-us" />
        <h2 className="Page-Title">تواصل معنا</h2>
      </div>
      
      {/* Page Body */}
      <div className='Contact-us-body Page-Body'>
        <div className="Contact-us-title Page-title-container">
          <h1 className="Services-title">اطلب خدمتك الآن</h1>
          <p className="description">اطلب عرض السعر أو للإستشارات والإستفسارات</p>
        </div>

        <div className="flex-container-con">

          <div className="right-column">
            
            <div className="contact-info">
              <div className="social-media">
                <a href="https://www.instagram.com/26ideasit?igsh=MTB3aG8yYjdvMHpucw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.facebook.com/people/26ideasit/61556228715389/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.snapchat.com/add/twentysixideas?sender_web_id=90b82284-b8fa-4394-a5c0-a390106eb680&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} /></a>
                <a href="https://x.com/26ideasit?t=1Ol8-gsECv1qCCpcQ9MdQQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://www.tiktok.com/@26ideasit?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
              <ul className="contact-details">
                <li className="question" >
                  <FontAwesomeIcon icon={faQuestionCircle} /><span> في خدمتكم للجواب على جميع استفسراتكم </span> 
                </li>
                <li className="email">
                  <FontAwesomeIcon icon={faEnvelope} /><span> it@26ideas.sa</span>
                </li>
               
                <li className="phone" >
                  <FontAwesomeIcon icon={faPhoneAlt} /><span> 00966566664530</span>
                </li>
                <li className="phone" >
                  <FontAwesomeIcon icon={faPhoneAlt} /><span> 00966566662570</span>
                </li>
                <li className="location" >
                  <FontAwesomeIcon icon={faMapMarkerAlt} /><span> المملكة العربية السعودية - الرياض
                  </span></li>
              </ul>
            </div>
            <div className="map-container">
              <iframe title='map'
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d226.8030492323786!2d46.54453093601342!3d24.559887015517578!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1716969955481!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form className="Contact-us-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onInput={handleChange} 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              />
              <label htmlFor="fullName">الاسم الكامل</label>
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onInput={handleChange} 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              />
              <label htmlFor="phoneNumber">رقم الهاتف</label>
            </div>
            <div className="form-group">
              <input 
                type="mail" 
                id="email" 
                name="email" 
                value={formData.email} 
                onInput={handleChange}  
                onFocus={handleAutofill} 
                placeholder=" " 
              />
              <label htmlFor="email">  البريد الإلكتروني   </label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onInput={handleChange} 
                onFocus={handleAutofill}  
                placeholder=" " 
              />
              <label htmlFor="subject">الموضوع</label>
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onInput={handleChange}  
                rows="2" 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              ></textarea>
              <label htmlFor="message">الرسالة</label>
            </div>
            <button type="submit" className="submit-button">إرسال</button>
          </form>

          
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Contact_us;
