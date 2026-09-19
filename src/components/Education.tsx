import { useLanguage } from '../context/LanguageContext';
import type { EducationItem } from '../types/portfolio';

const Education = () => {
  const { t } = useLanguage();

  const educationData = (t<EducationItem[]>('education.items')) || [];

  return (
    <section id="education" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span>{t<string>('education.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t<string>('education.title')}
          </h2>
        </div>

        {/* Education Grid */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {educationData.map((edu: EducationItem, index: number) => {
            const isHigherEd = index === 0;

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isHigherEd ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                  background: isHigherEd
                    ? 'var(--primary-light)'
                    : 'var(--bg-card)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: isHigherEd ? 'var(--primary)' : '#EFEBE2',
                        border: `1px solid ${isHigherEd ? 'var(--primary)' : '#DFD8CD'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHigherEd ? '#ffffff' : 'var(--text-secondary)'
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: isHigherEd ? 'var(--primary)' : 'var(--text-muted)',
                        padding: '3px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: isHigherEd ? '#ffffff' : '#EFEBE2',
                        border: `1px solid ${isHigherEd ? 'rgba(192, 178, 131, 0.45)' : 'var(--border)'}`
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '6px' }}>
                    {edu.institution}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {edu.degree}
                  </p>
                </div>

                {edu.status && (
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                    <span style={{ fontSize: '12px', color: '#059669', fontWeight: '700' }}>
                      {edu.status}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
