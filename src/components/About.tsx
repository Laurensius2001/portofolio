import { useLanguage } from '../context/LanguageContext';
import type { AboutPillar } from '../types/portfolio';

const About = () => {
  const { t } = useLanguage();

  const pillars = (t<AboutPillar[]>('about.pillars')) || [];

  return (
    <section id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>{t<string>('about.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t<string>('about.title')}
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
        >
          {/* Main Story Bento Card */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 12',
              padding: 'clamp(28px, 4vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <span style={{ width: '28px', height: '2px', background: 'var(--primary)' }} />
              <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Senior Engineer Profile
              </span>
            </div>

            <p
              style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                lineHeight: 1.7,
                color: 'var(--text-main)',
                marginBottom: '20px',
                fontWeight: '400'
              }}
            >
              {t<string>('about.p1')}
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '28px'
              }}
            >
              {t<string>('about.p2')}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['End-to-End Delivery', 'RESTful Architectures', 'PostgreSQL & Relational DBs', 'Scalable Systems', 'Thermal POS Integration'].map((tag, idx) => (
                <span key={idx} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Current Focus Card */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 12',
              padding: '28px 36px',
              background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(0, 180, 255, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '800px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(0, 180, 255, 0.15)',
                  border: '1px solid rgba(0, 180, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                  {t<string>('about.focusTitle')}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {t<string>('about.focusDesc')}
                </p>
              </div>
            </div>

            <a
              href="#services"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '13px', whiteSpace: 'nowrap' }}
            >
              <span>Explore Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* 3 Core Pillars Container */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {pillars.map((pillar: AboutPillar, index: number) => {
              const icons = [
                <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 8 6 4-6 4" />
                </svg>,
                <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>,
                <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              ];

              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '30px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: index === 0 ? 'var(--primary)' : index === 1 ? '#818cf8' : '#34d399'
                    }}
                  >
                    {icons[index % icons.length]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#ffffff' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
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

export default About;
