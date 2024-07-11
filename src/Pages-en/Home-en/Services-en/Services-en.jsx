import React, { useEffect, useRef } from 'react';
import './Services.css';


function Services_en() {
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
    <div className="Services" id="Services" ref={servicesRef}>
      <div className='title-wrapper'>
        <h2 className='Services-Title fade-in-element hidden'>Our Services</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        The services we offer are specially designed to meet your needs.
      </p>

      <div className="Services-Grid fade-in-element hidden">

        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-robot Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>AI Solutions</h3>
              <p>We provide custom applications utilizing AI technologies like deep learning, data analysis, and design and development of intelligent robots for various sectors.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-laptop-code Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>Web Development</h3>
              <p>We offer innovative design and development of websites and mobile application development.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-mobile-alt Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>Mobile App Development</h3>
              <p>We offer innovative design for mobile application development.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-bullhorn Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3> Marketing</h3>
              <p>Promote your products or services through social media, online advertising, and email marketing.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-lightbulb Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>Innovative Tech Products</h3>
              <p>We provide smart devices compatible with AI software for business and daily tasks.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-handshake Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>Consultations</h3>
              <p>We help businesses and individuals achieve their technical goals with modern software and tools.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-cogs Service-Icon"></i> {/* ERP Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Enterprise Resource Planning (ERP)</h3>
              <p>This software helps companies improve sales processes and provide a seamless customer experience. Features include sales tracking, inventory management, and data analytics for smarter decision-making.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-warehouse Service-Icon"></i> {/* Inventory Management Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Inventory Management Software</h3>
              <p>This software helps companies efficiently organize warehouses by facilitating receiving, shipping, storage, and inventory processes, improving data accuracy and decision-making.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-cash-register Service-Icon"></i> {/* Sales and POS Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Sales and POS Management Software</h3>
              <p>This software helps companies improve sales processes and provide a seamless customer experience. Features include sales tracking, inventory management, and data analytics for smarter decision-making.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-cloud Service-Icon"></i> {/* Cloud Computing Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Cloud Computing Services</h3>
              <p>We offer cloud computing solutions to enhance IT infrastructure and increase operational efficiency.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-shield-alt Service-Icon"></i> {/* Security Systems Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Security Systems</h3>
              <p>We provide advanced security systems to protect businesses and homes from threats and risks.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-network-wired Service-Icon"></i> {/* Infrastructure and Networking Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Infrastructure and Networking</h3>
              <p>We offer network infrastructure planning and implementation services to ensure smooth operation and constant connectivity.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-chart-bar Service-Icon"></i> {/* Data Analysis Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Data Analysis</h3>
              <p>We offer data analysis services to help companies make data-driven decisions and achieve better results.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-bullhorn Service-Icon"></i> {/* Digital Marketing Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Digital Marketing</h3>
              <p>Promote your products or services through social media, online advertisements, and email marketing.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/en/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-ad Service-Icon"></i> {/* Advertising Icon */}
            </div>
            <div className="Service-Lower">
              <h3>Advertising</h3>
              <p>We provide advertising services to increase awareness of your products or services and achieve broader reach.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="Button-Container fade-in-element hidden">
        <a className='link' href="/en/services">
          <button className="Learn-More-Button">Learn About Our Services</button>
        </a>
      </div>
    </div>
  );
}

export default Services_en;
