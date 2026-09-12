import type { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { SkillCategory } from '../types/portfolio';

const Skills = () => {
  const { t } = useLanguage();

  const categories = (t<SkillCategory[]>('skills.categories')) || [];

  const categoryIcons: Record<string, ReactNode> = {
    layout: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    server: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    database: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    cpu: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    )
  };

  return (
    <section id="skills" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
            <span>{t('skills.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t('skills.title')}
          </h2>
          <p className="section-desc">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {categories.map((cat: SkillCategory, index: number) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                    color: 'var(--primary)'
                  }}
                >
                  {categoryIcons[cat.icon] || categoryIcons.layout}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>
                    {cat.name}
                  </h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {cat.items ? `${cat.items.length} technologies` : ''}
                  </span>
                </div>
              </div>

              {/* Skills Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items && cat.items.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="tech-pill"
                    style={{
                      fontSize: '13px',
                      padding: '6px 14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
