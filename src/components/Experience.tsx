import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const experienceData = t('experience.items') as any[];

    return (
        <section id="experience" className="container" style={{ marginBottom: isMobile ? '60px' : '80px', textAlign: isMobile ? 'left' : 'center' }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '32px'
            }}>
                {t('experience.title')}
            </p>

            <div style={{ maxWidth: '800px', margin: isMobile ? '0' : '0 auto', textAlign: 'left' }}>
                {experienceData.map((exp: any, index: number) => (
                    <div
                        key={index}
                        style={{
                            padding: isMobile ? '16px 0' : '20px 0',
                            borderBottom: index < experienceData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                color: 'var(--primary)',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: '600',
                                letterSpacing: '0.5px'
                            }}>
                                {exp.period}
                            </p>
                        </div>
                        <h3 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            color: 'var(--text-main)',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '600',
                            marginBottom: '4px'
                        }}>
                            {exp.position}
                        </h3>
                        <p style={{
                            fontSize: isMobile ? '14px' : '15px',
                            color: 'var(--text-muted)',
                            fontFamily: 'Poppins, sans-serif'
                        }}>
                            {exp.company}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
