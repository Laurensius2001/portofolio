import { useState, useEffect } from 'react';

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    'Web Application Development',
    'Full-Stack Development',
    'Backend & API Development',
    'Admin Dashboard Development',
    'Information System Development',
    'Database Design & Management',
    'System Integration',
    'Responsive Web Development'
  ];

  return (
    <section id="services" className="container" style={{
      marginBottom: isMobile ? '60px' : '100px',
      marginTop: isMobile ? '60px' : '100px',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '600',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: isMobile ? '32px' : '24px'
      }}>
        Services
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: isMobile ? '8px' : '12px',
        justifyContent: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {services.map((service, index) => (
          <span key={index} className="badge" style={{ fontSize: isMobile ? '13px' : '14px' }}>
            {service}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Services;
