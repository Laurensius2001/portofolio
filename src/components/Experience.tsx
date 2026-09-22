import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ExperienceItem } from '../types/portfolio';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const { t, language } = useLanguage();
  const experienceItems = (t<ExperienceItem[]>('experience.items')) || [];

  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? experienceItems : experienceItems.slice(0, 5);

  return (
    <section id="experience" style={{ padding: '80px 24px', backgroundColor: '#0d0e15' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#c084fc', fontFamily: 'var(--font-marker)' }}>★</span>
            <span style={{ fontFamily: 'var(--font-doodle)', fontSize: '24px', fontWeight: 700, color: '#c084fc' }}>
              Career History
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-marker)', fontSize: '48px', color: '#ffffff', letterSpacing: '1px' }}>
            WORK <span style={{ color: '#ccff00' }}>EXPERIENCE</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#94a3b8', maxWidth: '600px' }}>
            {language === 'en'
              ? 'Proven track record leading full-stack web platforms, ISP systems, and high-availability operations.'
              : 'Jejak rekam memimpin pengembangan sistem web skala enterprise dan operasional ketersediaan tinggi.'}
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', marginTop: '48px', paddingLeft: '32px', borderLeft: '2px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {displayedItems.map((item, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              {/* Milestone Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-44px',
                  top: '24px',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: '#0d0e15',
                  border: '2px solid #ccff00',
                  boxShadow: '0 0 10px #ccff00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ccff00' }} />
              </div>

              {/* Card */}
              <div
                style={{
                  background: '#141522',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '24px 28px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#ccff00', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.period}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                      {item.position}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                    <Briefcase style={{ width: '14px', height: '14px', color: '#c084fc' }} />
                    <span>{item.company}</span>
                  </div>
                </div>

                <p style={{ marginTop: '14px', fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {item.desc}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          color: '#cbd5e1',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {experienceItems.length > 5 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-hero-outline"
              style={{ fontSize: '13px', padding: '10px 24px' }}
            >
              <span>{showAll ? 'Show Less' : 'View Earlier Roles (2019 – 2024)'}</span>
              {showAll ? <ChevronUp style={{ width: '16px', height: '16px' }} /> : <ChevronDown style={{ width: '16px', height: '16px' }} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
