import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ExperienceItem } from '../types/portfolio';

const Experience = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences = (t<ExperienceItem[]>('experience.items')) || [];

  if (!experiences || experiences.length === 0) {
    return null;
  }

  const currentExp = experiences[0];
  const pastExperiences = experiences.slice(1);

  const handleCollapse = (shouldScroll: boolean) => {
    setIsExpanded(false);
    if (shouldScroll) {
      const el = document.getElementById('experience');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
            {/* 1. Default Current Job (Pekerjaan Sekarang) */}
            <div style={{ position: 'relative' }}>
              {/* Timeline Dot (Highlighted Active) */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '20px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 16px var(--primary)',
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
                    background: '#ffffff'
                  }}
                />
              </div>

              {/* Current Job Card Content */}
              <div
                className="glass-card"
                style={{
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  border: '1px solid rgba(0, 180, 255, 0.35)',
                  boxShadow: '0 10px 30px -10px rgba(0, 180, 255, 0.2)'
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
                    {currentExp.position}
                  </h3>

                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(0, 180, 255, 0.18)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(0, 180, 255, 0.45)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        boxShadow: '0 0 8px var(--primary)'
                      }}
                    />
                    {currentExp.period}
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
                  <span>{currentExp.company}</span>
                </div>

                {currentExp.desc && (
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '4px' }}>
                    {currentExp.desc}
                  </p>
                )}

                {currentExp.tags && currentExp.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {currentExp.tags.map((tag: string, i: number) => (
                      <span key={i} className="tech-pill" style={{ fontSize: '11px', padding: '2px 10px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Collapsible Past Experiences */}
            {pastExperiences.length > 0 && (
              <>
                {!isExpanded ? (
                  /* Collapsed View: Interactive Expand Trigger */
                  <div style={{ position: 'relative' }}>
                    {/* Dashed Timeline Connector Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-32px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(15, 23, 42, 0.95)',
                        border: '2px dashed var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        color: 'var(--primary)'
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="exp-collapse-btn glass-card"
                      id="toggle-experience-expand"
                      aria-expanded={false}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: 'rgba(0, 180, 255, 0.1)',
                            border: '1px solid rgba(0, 180, 255, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            flexShrink: 0
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </div>

                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-main)', lineHeight: 1.3 }}>
                            {t<string>('experience.showMore')}
                          </div>
                          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {t<string>('experience.showMoreDesc')}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                        <span className="exp-collapse-badge">
                          +{pastExperiences.length}
                        </span>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: '#EFEBE2',
                            border: '1px solid #DFD8CD',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)'
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  /* Expanded View: All Past Experiences + Collapse Controls */
                  <>
                    {/* Milestone Divider Header with Quick Collapse */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 0',
                        marginTop: '-4px'
                      }}
                    >
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {t<string>('experience.pastRolesHeading')} ({pastExperiences.length})
                      </span>

                      <button
                        type="button"
                        onClick={() => handleCollapse(false)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#EFEBE2',
                          border: '1px solid #DFD8CD',
                          borderRadius: 'var(--radius-full)',
                          padding: '4px 14px',
                          fontSize: '12px',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--primary)';
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.background = 'var(--primary-light)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = '#DFD8CD';
                          e.currentTarget.style.background = '#EFEBE2';
                        }}
                      >
                        <span>{t<string>('experience.showLess')}</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                    </div>

                    {/* Past Roles List */}
                    {pastExperiences.map((exp: ExperienceItem, idx: number) => (
                      <div
                        key={idx}
                        className="exp-item-animated"
                        style={{
                          position: 'relative',
                          animationDelay: `${idx * 40}ms`
                        }}
                      >
                        {/* Timeline Dot */}
                        <div
                          style={{
                            position: 'absolute',
                            left: '-32px',
                            top: '20px',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: 'rgba(15, 23, 42, 0.95)',
                            border: '2px solid var(--primary)',
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
                              background: 'var(--primary)'
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
                                background: '#EFEBE2',
                                color: 'var(--text-muted)',
                                border: '1px solid #DFD8CD'
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
                    ))}

                    {/* Bottom Collapse Button */}
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: '-32px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(15, 23, 42, 0.95)',
                          border: '2px solid rgba(0, 180, 255, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                          color: 'var(--primary)'
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCollapse(true)}
                        className="btn-secondary"
                        style={{
                          width: '100%',
                          padding: '14px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          borderRadius: 'var(--radius-xl)',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        <span>{t<string>('experience.showLess')}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
