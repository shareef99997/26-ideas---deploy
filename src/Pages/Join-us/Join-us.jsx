import React, { useState } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Join-us.css';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';
import emailjs from 'emailjs-com';

function Join_us() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    department: '',
    subject: '',
    message: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };


  const handleAutofill = (e) => {
    const { name, value } = e.target;
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
    emailjs.sendForm('Join-ID', 'Join-us-template', e.target, 'kQjXhKO0mvsWWtzGA')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('تم الإرسال بنجاح');
        // Reset the form after successful submission
        setFormData({
          fullName: '',
          phoneNumber: '',
          department: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email send error:', error.text);
      });
  };

  return (
    <div className="Join-us" id="Join-us" lang="ar">
      <NavBar currentPage="join-us" />
      <div className="Join-us-Header Page-Header">
        <div className='page-header-spacer'></div>
        <div className="Page-Title-Wrapper"><h2 className="Page-Title">إنضم إلينا</h2></div>
      </div>

      {/* Page Body */}
      <div className='Join-us-body Page-Body'>
        <div className="Join-us-title Page-title-container">
          <h1 className="Services-title">إنضم لفريق 26 فكرة</h1>
          <p className="description"> اصبح فرد من العائلة الآن </p>
        </div>
        <div className="flex-container">
          {/* Image Container */}
          <div className="image-container">
            <img src={require("../../Assets/Images/join-us.jpg")} alt="Project Management" />
          </div>
          <form className="Join-us-form" onSubmit={handleSubmit}>
            
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
              <select 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                onFocus={handleAutofill} 
                
                placeholder=" " 
              >
                <option value="" disabled hidden></option>
                <option value="marketing">قسم التسويق</option>
                <option value="it">قسم تقنية المعلومات</option>
              </select>
              <label htmlFor="department">القسم</label>
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
                onFocus={handleAutofill} 
                rows="2" 
                required 
                placeholder=" " 
              ></textarea>
              <label htmlFor="message">الرسالة</label>
            </div>
            {/* <div className="form-group">
              <input 
                type="file" 
                id="attachment" 
                name="attachment" 
                onChange={handleChange} 
              />
              <label htmlFor="attachment"> السيرة الذاتية (CV) </label>
            </div> */}
            <button type="submit" className="submit-button">إرسال</button>
          </form>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Join_us;
