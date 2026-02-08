import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" className="container" style={{
      marginBottom: isMobile ? '60px' : '80px',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <p style={{
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '600',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '8px'
      }}>
        Lorens Adonara
      </p>
      <h2 style={{
        fontSize: isMobile ? '28px' : '32px',
        fontWeight: '700',
        color: 'var(--text-main)',
        marginBottom: '24px',
        fontFamily: 'Poppins, sans-serif'
      }}>
        {t('about.title')}
      </h2>
      <p style={{
        fontSize: isMobile ? '16px' : '18px',
        lineHeight: '1.7',
        color: 'var(--text-muted)',
        marginBottom: '24px',
        fontFamily: 'Poppins, sans-serif'
      }}>
        {t('about.p1')}
      </p>
      <p style={{
        fontSize: isMobile ? '16px' : '18px',
        lineHeight: '1.7',
        color: 'var(--text-muted)',
        fontFamily: 'Poppins, sans-serif'
      }}>
        {t('about.p2')}
      </p>
    </section>
  );
};

export default About;
