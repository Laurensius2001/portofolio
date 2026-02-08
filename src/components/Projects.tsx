import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projectsData = t('projects.items') as any[];

    return (
        <section id="project" className="container" style={{ marginBottom: isMobile ? '60px' : '80px', textAlign: isMobile ? 'left' : 'center' }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px'
            }}>
                {t('projects.title')}
            </p>
            <h2 style={{
                fontSize: isMobile ? '28px' : '32px',
                fontWeight: '700',
                color: 'var(--text-main)',
                marginBottom: isMobile ? '32px' : '40px',
                fontFamily: 'Poppins, sans-serif'
            }}>
                {t('projects.subtitle')}
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: isMobile ? '24px' : '40px',
                maxWidth: '1000px',
                margin: isMobile ? '0' : '0 auto'
            }}>
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px',
                            padding: isMobile ? '24px' : '40px',
                            textAlign: 'left',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '24px' : '32px' }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: 'var(--primary)', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.category}
                                </p>
                                <h3 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: isMobile ? '15px' : '16px', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '700px', fontFamily: 'Poppins, sans-serif' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: isMobile ? '24px' : '32px' }}>
                                    {project.tags.map((tag: string, i: number) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '11px',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                padding: '4px 12px',
                                                borderRadius: '99px',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pill"
                                        style={{ width: 'fit-content' }}
                                    >
                                        {t('projects.viewlive')}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                    </a>
                                ) : (
                                    <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                        {t('projects.confidential')}
                                    </span>
                                )}
                            </div>

                            {project.images && project.images.length > 0 && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '12px',
                                    borderRadius: '16px',
                                    overflow: 'hidden'
                                }}>
                                    {project.images.map((img: string, i: number) => (
                                        <div key={i} style={{ aspectRatio: isMobile ? '16/9' : '16/10', overflow: 'hidden', background: '#000' }}>
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${i + 1}`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9', transition: 'all 0.3s ease' }}
                                                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
