import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

function Services_en() {
  const servicesRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const services = [
    { id: 1, category: 'Software Development', title: 'Artificial Intelligence Solutions', description: 'We offer custom applications leveraging AI technologies such as deep learning and data analysis, robot development', icon: 'fas fa-robot' },
    { id: 2, category: 'Software Development', title: 'Website Development', description: 'We provide innovative design and development of websites and mobile applications', icon: 'fas fa-laptop-code' },
    { id: 3, category: 'Software Development', title: 'Mobile App Development', description: 'We offer innovative design for mobile app development', icon: 'fas fa-mobile-alt' },
    { id: 4, category: 'Information Technology Solutions', title: 'Innovative Technology Products', description: 'We offer smart devices compatible with AI software for daily work and tasks.', icon: 'fas fa-lightbulb' },
    { id: 5, category: 'Information Technology Solutions', title: 'Consulting', description: 'We help companies and individuals achieve their technical goals with modern software and tools', icon: 'fas fa-handshake' },
    { id: 6, category: 'Information Technology Solutions', title: 'Enterprise Resource Planning (ERP)', description: 'These software solutions help companies improve sales processes and provide a seamless customer experience.', icon: 'fas fa-cogs' },
    { id: 7, category: 'Information Technology Solutions', title: 'Inventory Management Software', description: 'These software solutions help companies efficiently organize warehouses', icon: 'fas fa-warehouse' },
    { id: 8, category: 'Information Technology Solutions', title: 'Sales Management Software', description: 'These software solutions help companies improve sales processes and provide a seamless customer experience.', icon: 'fas fa-cash-register' },
    { id: 9, category: 'Information Technology Solutions', title: 'Cloud Computing Services', description: 'We provide cloud computing solutions to enhance IT infrastructure.', icon: 'fas fa-cloud' },
    { id: 10, category: 'Information Technology Solutions', title: 'Security Systems', description: 'We provide advanced security systems to protect enterprises and homes from threats and risks.', icon: 'fas fa-shield-alt' },
    { id: 11, category: 'Information Technology Solutions', title: 'Infrastructure and Networks', description: 'We offer network infrastructure planning and implementation to ensure smooth operation and constant connectivity.', icon: 'fas fa-network-wired' },
    { id: 12, category: 'Information Technology Solutions', title: 'Data Analysis', description: 'We provide data analysis services to help companies make decisions based on reliable foundations', icon: 'fas fa-chart-bar' },
    { id: 13, category: 'Marketing', title: 'Digital Marketing', description: 'Promote your products, services online using the latest means', icon: 'fas fa-bullhorn' },
    { id: 14, category: 'Marketing', title: 'Advertising', description: 'We provide advertising services to increase awareness of your products or services and achieve wider dissemination.', icon: 'fas fa-ad' },
    { id: 15, category: 'Marketing', title: 'Website Management', description: 'Website management services to ensure smooth operation and continuous content updates.', icon: 'fas fa-globe' },
  ];

  const filteredServices = activeFilter === 'All' ? services : services.filter(service => service.category === activeFilter);

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

  const toggleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="Services" id="Services" ref={servicesRef}>
      <div className='title-wrapper'>
        <h2 className='Services-Title fade-in-element hidden'>Our Services</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        Our services are designed specifically to meet your needs
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className={activeFilter === 'All' ? 'active' : ''} onClick={() => toggleFilter('All')}>All</button>
        <button className={activeFilter === 'Software Development' ? 'active' : ''} onClick={() => toggleFilter('Software Development')}>Software Development</button>
        <button className={activeFilter === 'Information Technology Solutions' ? 'active' : ''} onClick={() => toggleFilter('Information Technology Solutions')}>Information Technology Solutions</button>
        <button className={activeFilter === 'Marketing' ? 'active' : ''} onClick={() => toggleFilter('Marketing')}>Marketing</button>
      </div>

      <div className="Services-Grid fade-in-element hidden">
        {filteredServices.map(service => (
          <a href='/en/contact-us'>
            <div key={service.id} className="Service-Box">
              <div className="Service-Upper">
                <i className={`${service.icon} Service-Icon`}></i>
              </div>
              <div className="Service-Lower">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="Button-Container fade-in-element hidden">
        <a className='link' href="/services">
          <button className="Learn-More-Button">Learn More About Our Services</button>
        </a>
      </div>
    </div>
  );
}

export default Services_en;
