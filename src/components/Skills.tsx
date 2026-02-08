import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const skillsData = t('skills.items') as string[];

    return (
        <section id="skills" className="container" style={{
            marginBottom: isMobile ? '60px' : '80px',
            textAlign: isMobile ? 'left' : 'center'
        }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '24px'
            }}>
                {t('skills.title')}
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '8px' : '12px',
                justifyContent: isMobile ? 'flex-start' : 'center',
                maxWidth: '900px',
                margin: isMobile ? '0' : '0 auto'
            }}>
                {skillsData.map((skill, index) => (
                    <span key={index} className="badge" style={{ fontSize: isMobile ? '13px' : '14px' }}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
