import React, { useEffect, useRef } from 'react';
import './Services.css';


function Services() {
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
    <div className="Services" id="Services" ref={servicesRef} >
      <div className='title-wrapper'>
        <h2 className='Services-Title fade-in-element hidden'>خدماتنا</h2>
      </div>
      <p className="Services-Description fade-in-element hidden">
        الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
      </p>

      <div className="Services-Grid fade-in-element hidden">
        
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-robot Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>حلول الذكاء الاصطناعي</h3>
              <p>نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات وتصميم وتطوير روبوتات ذكية للقطاعات المختلفة</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-laptop-code Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>تطوير المواقع الإلكترونية</h3>
              <p>نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-mobile-alt Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>تطوير تطبيقات الجوال</h3>
              <p>نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a  href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-bullhorn Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3> التسويق </h3>
              <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a  href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-lightbulb Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>منتجات تقنية مبتكرة</h3>
              <p>نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل والمهام اليومية.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us" >
            <div className="Service-Upper" lang="en">
              <i className="fas fa-handshake Service-Icon"></i>
            </div>
            <div className="Service-Lower">
              <h3>الاستشارات</h3>
              <p>نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجيات وأدوات حديثة</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
        <a href="/contact-us" ><div className="Service-Upper"lang="en">
            <i className="fas fa-cogs Service-Icon"></i> {/* ERP Icon */}
          </div>
          <div className="Service-Lower">
            <h3> (ERP) تخطيط موارد المؤسسات </h3>
            <p> تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء. تتضمن ميزات مثل تتبع المبيعات، إدارة المخزون، وتحليلات البيانات لاتخاذ قرارات أكثر ذكاءً. </p>
          </div></a>
          
        </div>
        <div className="Service-Box fade-in-element hidden">
        <a href="/contact-us" >
          <div className="Service-Upper"lang="en">
            <i className="fas fa-warehouse Service-Icon"></i> {/* Inventory Management Icon */}
          </div>
          <div className="Service-Lower">
            <h3> برمجيات إدارة المخزون </h3>
            <p> تساعد هذه البرمجيات الشركات على تنظيم المخازن بكفاءة، من خلال تسهيل عمليات الاستلام، التسليم، التخزين، والجرد، مما يساهم في تحسين دقة البيانات واتخاذ قرارات أفضل </p>
          </div></a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us" >
            <div className="Service-Upper"lang="en">
              <i className="fas fa-cash-register Service-Icon"></i> {/* Sales and POS Icon */}
            </div>
            <div className="Service-Lower">
              <h3> برمجيات إدارة المبيعات و نقاط البيع </h3>
              <p> تساعد هذه البرمجيات الشركات على تحسين عمليات البيع وتقديم تجربة سلسة للعملاء. تتضمن ميزات مثل تتبع المبيعات، إدارة المخزون، وتحليلات البيانات لاتخاذ قرارات أكثر ذكاءً. </p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-cloud Service-Icon"></i> {/* Cloud Computing Icon */}
            </div>
            <div className="Service-Lower">
              <h3>خدمات الحوسبة السحابية</h3>
              <p>نقدم حلول الحوسبة السحابية لتعزيز البنية التحتية لتكنولوجيا المعلومات وزيادة الكفاءة التشغيلية.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-shield-alt Service-Icon"></i> {/* Security Systems Icon */}
            </div>
            <div className="Service-Lower">
              <h3>الأنظمة الأمنية</h3>
              <p>نوفر أنظمة أمنية متقدمة لحماية المؤسسات والمنازل من التهديدات والمخاطر.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-network-wired Service-Icon"></i> {/* Infrastructure and Networking Icon */}
            </div>
            <div className="Service-Lower">
              <h3>البنية التحتية والشبكات</h3>
              <p>نقدم خدمات تخطيط وتنفيذ البنية التحتية للشبكات لضمان تشغيل سلس واتصال دائم.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-chart-bar Service-Icon"></i> {/* Data Analysis Icon */}
            </div>
            <div className="Service-Lower">
              <h3>تحليل البيانات</h3>
              <p>نقدم خدمات تحليل البيانات لمساعدة الشركات على اتخاذ قرارات مبنية على البيانات وتحقيق نتائج أفضل.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-bullhorn Service-Icon"></i> {/* Digital Marketing Icon */}
            </div>
            <div className="Service-Lower">
              <h3>التسويق الإلكتروني</h3>
              <p>ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني.</p>
            </div>
          </a>
        </div>
        <div className="Service-Box fade-in-element hidden">
          <a href="/contact-us">
            <div className="Service-Upper" lang="en">
              <i className="fas fa-ad Service-Icon"></i> {/* Advertising Icon */}
            </div>
            <div className="Service-Lower">
              <h3>دعاية و إعلان</h3>
              <p>نقدم خدمات الدعاية والإعلان لزيادة الوعي بمنتجاتك أو خدماتك وتحقيق انتشار أوسع.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="Button-Container fade-in-element hidden">
        <a className='link' href="/services" >
            <button className="Learn-More-Button">تعرف على خدماتنا</button>
        </a>
      </div>
    </div>
  );
}

export default Services;
