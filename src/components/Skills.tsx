import type { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { SkillBar, SkillFeature } from '../types/portfolio';

const Skills = () => {
  const { t } = useLanguage();

  const title1 = t<string>('skills.title1') || 'SKILLS &';
  const title2 = t<string>('skills.title2') || 'EXPERTISE';
  const quoteText = t<string>('skills.quote') || 'I design and build digital experiences that are not only beautiful but also functional, intuitive, and impactful.';

  const defaultBars: SkillBar[] = [
    { name: 'FULL-STACK WEB DEV', level: 95 },
    { name: 'BACKEND & RESTFUL APIS', level: 92 },
    { name: 'DATABASE & POSTGRESQL', level: 90 },
    { name: 'CMS & SHOPIFY (LIQUID)', level: 88 },
    { name: 'UI / UX & RESPONSIVE DESIGN', level: 92 },
    { name: 'SYSTEM & POS INTEGRATION', level: 85 }
  ];

  const bars = (t<SkillBar[]>('skills.bars')) || defaultBars;

  const defaultFeatures: SkillFeature[] = [
    {
      icon: 'monitor',
      title: 'END-TO-END DELIVERY',
      desc: 'From intuitive frontend interfaces to robust database infrastructures.'
    },
    {
      icon: 'code',
      title: 'ROBUST BACKEND & APIS',
      desc: 'Scalable RESTful endpoints, secure business logic, and modular clean code.'
    },
    {
      icon: 'responsive',
      title: 'CMS & E-COMMERCE ENGINES',
      desc: 'Custom Shopify Liquid templates, payment gateways, and catalog systems.'
    },
    {
      icon: 'rocket',
      title: 'PERFORMANCE & HARDWARE POS',
      desc: 'High-speed database queries, thermal POS receipt printing, and 99.9% uptime.'
    }
  ];

  const features = (t<SkillFeature[]>('skills.features')) || defaultFeatures;

  const featureIcons: Record<string, ReactNode> = {
    monitor: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    code: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="10" y1="20" x2="14" y2="4" />
      </svg>
    ),
    responsive: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="13" height="15" rx="2" />
        <rect x="15" y="8" width="7" height="11" rx="1.5" />
      </svg>
    ),
    rocket: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
      </svg>
    )
  };

  return (
    <section id="skills" className="editorial-skills-section">
      <div className="container">
        <div className="editorial-skills-grid">
          {/* Column 1: Header + Progress Bars */}
          <div className="skills-editorial-bars-col">
            <div className="skills-editorial-title">
              <span className="skills-title-dark">{title1}</span>
              <span className="skills-title-accent">{title2}</span>
            </div>

            <div className="skills-bars-list">
              {bars.map((bar, idx) => (
                <div key={idx} className="skill-bar-row">
                  <span className="skill-bar-label">{bar.name}</span>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${bar.level}%` }} />
                  </div>
                  <span className="skill-bar-value">{bar.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Large Decorative Quote */}
          <div className="skills-editorial-quote-col">
            <div className="skills-quote-icon" aria-hidden="true">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="#E8DDD5">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="skills-quote-text">
              {quoteText}
            </blockquote>
          </div>

          {/* Column 3: 4 Distinct Pillars with Terracotta Circles */}
          <div className="skills-editorial-features-col">
            {features.map((feat, idx) => (
              <div key={idx} className="skills-feature-item">
                <div className="skills-feature-circle">
                  {featureIcons[feat.icon] || featureIcons.monitor}
                </div>
                <div className="skills-feature-info">
                  <h4 className="skills-feature-title">{feat.title}</h4>
                  <p className="skills-feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
