import './Contact.css';


function Contact() {
  return (
    <div className="Contact" id="Contact" >
      <div className='Contact-Body'>
        <div className="content-wrapper">
          <h2 className="contact-heading"> لبدأ مشروعك الآن او للإستفسارات </h2>
          <a className='link' href="/contact-us" >
            <button className="contact-button">
              <i className="fas fa-phone" lang='en'></i>  إتصل بنا
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
