import './Footer.css';
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok);

function Footer_en() {

  const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        newsemail: '',
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
      alert('Your Email Was Sent Successfully');
      // Reset the form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        newsemail: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Email send error:', error.text);
    });
  };

  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section-en about-footer-en">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>
              <li className="question">We are here to answer all your inquiries</li>
              <li className="email">it@26ideas.sa</li>
              <li className="phone">00966566664530</li>
              <li className="phone" >00966566662570</li>
              <li className="location">Saudi Arabia - Riyadh</li>
            </ul>
          </div>

          <div className="Footer-Section-en links-footer-en">
            <h2>Quick Links</h2>
            <ul>
              <li><a className='link' href="/en/">Home</a></li>
              <li><a className='link' href="/en/about-us">About Us</a></li>
              <li><a href="http://www.nextech-sa.com" target="_blank" rel="noopener noreferrer" className='link'>Our Store</a></li>
              <li><a className='link' href="/en/join-us">Join Us</a></li>
              <li><a className='link' href="/en/blog">Blog</a></li>
              <li><a className='link' href="/en/contact-us">Contact Us</a></li>
            </ul>
          </div>

          <div className="Footer-Section-en services-footer-en">
            <h2>Our Services</h2>
            <div className="Services-Links">
              <ul>
                <li><a className='link' href="/en/services">Software Development</a></li>
                <li><a className='link' href="/en/services">Marketing</a></li>
                <li><a className='link' href="/en/services">Consulting</a></li>
                <li><a className='link' href="/en/services">AI Solutions</a></li>
                <li><a className='link' href="/en/services">More...</a></li>
              </ul>
            </div>
          </div>

          <div className="Footer-Section-en news-section-en">
            <h2>Follow Our Newsletter</h2>
            <form className="newsletter-input" onSubmit={handleSubmit}>
              <button type="submit"> Subscribe </button>
              <input  type="mail" 
                id="newsemail" 
                name="newsemail" 
                value={formData.newsemail} 
                onInput={handleChange}  
                onFocus={handleAutofill} 
                placeholder=" Email Address " />
            </form>
          </div>
        </div>
      </div>
      
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
          <p>2024 | &copy; All rights reserved to 26 Ideas for Information Technology</p>
          <div className="Social-Media-Buttons">
          <a href="https://www.instagram.com/26ideasit?igsh=MTB3aG8yYjdvMHpucw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/people/26ideasit/61556228715389/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.snapchat.com/add/twentysixideas?sender_web_id=90b82284-b8fa-4394-a5c0-a390106eb680&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} /></a>
            <a href="https://x.com/26ideasit?t=1Ol8-gsECv1qCCpcQ9MdQQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.tiktok.com/@26ideasit?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_en;
