import { useLanguage } from '../context/LanguageContext';
import type { ExperienceItem } from '../types/portfolio';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = (t<ExperienceItem[]>('experience.items')) || [];

  return (
    <section id="experience" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>{t<string>('experience.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t<string>('experience.title')}
          </h2>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px'
          }}
        >
          {/* Vertical Timeline Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary) 0%, rgba(99, 102, 241, 0.4) 70%, transparent 100%)'
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp: ExperienceItem, index: number) => {
              const isCurrent = index === 0;

              return (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-32px',
                      top: '20px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--primary)' : 'rgba(15, 23, 42, 0.95)',
                      border: `2px solid ${isCurrent ? '#ffffff' : 'var(--primary)'}`,
                      boxShadow: isCurrent ? '0 0 16px var(--primary)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: isCurrent ? '#ffffff' : 'var(--primary)'
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '28px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', lineHeight: 1.2 }}>
                        {exp.position}
                      </h3>

                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          padding: '4px 14px',
                          borderRadius: 'var(--radius-full)',
                          background: isCurrent ? 'rgba(0, 180, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: isCurrent ? 'var(--primary)' : 'var(--text-muted)',
                          border: `1px solid ${isCurrent ? 'rgba(0, 180, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '14px', fontWeight: '600' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        <path d="M10 6h4" />
                        <path d="M10 10h4" />
                        <path d="M10 14h4" />
                        <path d="M10 18h4" />
                      </svg>
                      <span>{exp.company}</span>
                    </div>

                    {exp.desc && (
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '4px' }}>
                        {exp.desc}
                      </p>
                    )}

                    {exp.tags && exp.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                        {exp.tags.map((tag: string, i: number) => (
                          <span key={i} className="tech-pill" style={{ fontSize: '11px', padding: '2px 10px' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
