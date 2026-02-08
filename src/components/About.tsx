import { useState, useEffect } from 'react';

const About = () => {
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
        About Me
      </h2>
      <p style={{
        fontSize: isMobile ? '16px' : '18px',
        lineHeight: '1.7',
        color: 'var(--text-muted)',
        marginBottom: '24px',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Hi, I'm Lorens — a Full-Stack Web Developer based in Indonesia.
        I specialize in building web-based systems and applications, handling both frontend and backend development.
      </p>
      <p style={{
        fontSize: isMobile ? '16px' : '18px',
        lineHeight: '1.7',
        color: 'var(--text-muted)',
        fontFamily: 'Poppins, sans-serif'
      }}>
        I have experience developing information systems, admin dashboards, and data-driven web applications.
        My focus is on creating scalable, efficient, and maintainable solutions that solve real-world problems.
      </p>
    </section>
  );
};

export default About;
