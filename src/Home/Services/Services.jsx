import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

function Services() {
  const servicesRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('الكل');

  const services = [
    { id: 1, category: 'تطوير البرمجيات', title: 'حلول الذكاء الاصطناعي', description: 'نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات تطوير الروبوتات', icon: 'fas fa-robot' },
    { id: 2, category: 'تطوير البرمجيات', title: 'تطوير المواقع الإلكترونية', description: 'نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول', icon: 'fas fa-laptop-code' },
    { id: 3, category: 'تطوير البرمجيات', title: 'تطوير تطبيقات الجوال', description: 'نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول', icon: 'fas fa-mobile-alt' },
    { id: 4, category: 'حلول تقنية المعلومات', title: 'منتجات تقنية مبتكرة', description: 'نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.', icon: 'fas fa-lightbulb' },
    { id: 5, category: 'حلول تقنية المعلومات', title: 'الاستشارات', description: 'نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة', icon: 'fas fa-handshake' },
    { id: 6, category: 'حلول تقنية المعلومات', title: 'تخطيط موارد المؤسسات (ERP)', description: 'تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء.', icon: 'fas fa-cogs' },
    { id: 7, category: 'حلول تقنية المعلومات', title: 'برمجيات إدارة المخزون', description: 'تساعد هذه البرمجيات الشركات على تنظيم المخازن بكفاءة،', icon: 'fas fa-warehouse' },
    { id: 8, category: 'حلول تقنية المعلومات', title: 'برمجيات إدارة المبيعات  ', description: 'تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء.', icon: 'fas fa-cash-register' },
    { id: 9, category: 'حلول تقنية المعلومات', title: 'خدمات الحوسبة السحابية', description: 'نقدم حلول الحوسبة السحابية لتعزيز البنية التحتية لتكنولوجيا المعلومات .', icon: 'fas fa-cloud' },
    { id: 10, category: 'حلول تقنية المعلومات', title: 'الأنظمة الأمنية', description: 'نوفر أنظمة أمنية متقدمة لحماية المؤسسات والمنازل من التهديدات والمخاطر.', icon: 'fas fa-shield-alt' },
    { id: 11, category: 'حلول تقنية المعلومات', title: 'البنية التحتية والشبكات', description: 'نقدم خدمات تخطيط وتنفيذ البنية التحتية للشبكات لضمان تشغيل سلس واتصال دائم.', icon: 'fas fa-network-wired' },
    { id: 12, category: 'حلول تقنية المعلومات', title: 'تحليل البيانات', description: 'نقدم خدمات تحليل البيانات لمساعدة الشركات على اتخاذ قرارات مبنية اسس موثوقة', icon: 'fas fa-chart-bar' },
    { id: 13, category: 'التسويق', title: 'التسويق الإلكتروني', description: ' ترويج لمنتجاتك , خدماتك عبر الإنترنت بإستخدام احدث الوسائل  ', icon: 'fas fa-bullhorn' },
    { id: 14, category: 'التسويق', title: 'دعاية و إعلان', description: 'نقدم خدمات الدعاية والإعلان لزيادة الوعي بمنتجاتك أو خدماتك وتحقيق انتشار أوسع.', icon: 'fas fa-ad' },
    { id: 15, "category": "التسويق", "title": "إدارة مواقع الويب", "description": " خدمات إدارة مواقع الويب لضمان التشغيل السلس وتحديث المحتوى بشكل مستمر.", "icon": "fas fa-globe" },
  ];

  const filteredServices = activeFilter === 'الكل' ? services : services.filter(service => service.category === activeFilter);

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
        <h2 className='Services-Title fade-in-element hidden'>خدماتنا</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className={activeFilter === 'الكل' ? 'active' : ''} onClick={() => toggleFilter('الكل')}>الكل</button>
        <button className={activeFilter === 'تطوير البرمجيات' ? 'active' : ''} onClick={() => toggleFilter('تطوير البرمجيات')}>تطوير البرمجيات</button>
        <button className={activeFilter === 'حلول تقنية المعلومات' ? 'active' : ''} onClick={() => toggleFilter('حلول تقنية المعلومات')}>حلول تقنية المعلومات</button>
        <button className={activeFilter === 'التسويق' ? 'active' : ''} onClick={() => toggleFilter('التسويق')}>التسويق</button>
      </div>

      <div className="Services-Grid fade-in-element hidden">
        {filteredServices.map(service => (
          <a href='/contact-us'>
            <div key={service.id} className="Service-Box">
            <div className="Service-Upper" lang="en">
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
          <button className="Learn-More-Button">تعرف على خدماتنا</button>
        </a>
      </div>
    </div>
  );
}

export default Services;
