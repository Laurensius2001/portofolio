import { useState, useEffect } from 'react';

const Education = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const educationData = [
        {
            institution: 'ARS University (S1 Teknik Informatika)',
            period: '2020 - 2025'
        },
        {
            institution: 'SMK ICB Cinta Teknika Bandung',
            period: '2017 - 2020'
        },
        {
            institution: 'SMP Lamatewelu',
            period: '2014 - 2017'
        },
        {
            institution: 'SDK Tobi',
            period: '2008 - 2014'
        },
        {
            institution: 'TK Hermina Tobi',
            period: '2006 - 2008'
        }
    ];

    return (
        <section id="education" className="container" style={{ marginBottom: isMobile ? '60px' : '80px', textAlign: isMobile ? 'left' : 'center' }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '32px'
            }}>
                Education
            </p>

            <div style={{ maxWidth: '700px', margin: isMobile ? '0' : '0 auto', textAlign: 'left' }}>
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: isMobile ? 'flex-start' : 'flex-start',
                            padding: '16px 0',
                            gap: isMobile ? '6px' : '0',
                            borderBottom: index < educationData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                        }}
                    >
                        <p style={{
                            fontSize: isMobile ? '15px' : '16px',
                            color: 'var(--text-main)',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '500',
                            flex: 1
                        }}>
                            {edu.institution}
                        </p>
                        <p style={{
                            fontSize: isMobile ? '13px' : '14px',
                            color: 'var(--text-muted)',
                            fontFamily: 'Poppins, sans-serif',
                            whiteSpace: 'nowrap',
                            marginLeft: isMobile ? '0' : '20px'
                        }}>
                            {edu.period}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
