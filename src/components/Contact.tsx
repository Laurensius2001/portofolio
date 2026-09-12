import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} ${t('contact.copied')}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section id="contact" style={{ padding: '80px 0 100px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t('contact.title')}
          </h2>
          <p className="section-desc">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Card 1: WhatsApp Direct */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              border: '1px solid rgba(37, 211, 102, 0.25)',
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.06) 0%, rgba(11, 18, 34, 0.8) 100%)'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  marginBottom: '16px'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" />
                  <path d="M12 8l4 6-2 1-4-6" />
                </svg>
              </div>

              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                {t('contact.whatsapp.title')}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>
                +62 813-3738-3282
              </h3>
            </div>

            <a
              href="https://wa.me/6281337383282?text=Halo%20Lorens,%20saya%20tertarik%20dengan%20portofolio%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 8px 24px -6px rgba(37, 211, 102, 0.5)',
                padding: '10px 20px',
                fontSize: '14px'
              }}
            >
              <span>{t('contact.whatsapp.action')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Card 2: Email */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              border: '1px solid rgba(0, 180, 255, 0.25)',
              background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.06) 0%, rgba(11, 18, 34, 0.8) 100%)'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(0, 180, 255, 0.15)',
                  border: '1px solid rgba(0, 180, 255, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                {t('contact.email.title')}
              </span>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', marginTop: '4px', wordBreak: 'break-all' }}>
                {t('contact.email.value')}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleCopy(t('contact.email.value'), 'Email')}
                className="btn-secondary"
                style={{ flex: 1, padding: '10px 16px', fontSize: '13px' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span>{t('contact.email.action')}</span>
              </button>

              <a
                href={`mailto:${t('contact.email.value')}`}
                className="btn-secondary"
                style={{ padding: '10px 14px' }}
                title="Open Email Client"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8',
                  marginBottom: '16px'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>

              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                {t('contact.linkedin.title')}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>
                {t('contact.linkedin.value')}
              </h3>
            </div>

            <a
              href="https://id.linkedin.com/in/laurensius-suban-a99732264"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '14px', width: '100%' }}
            >
              <span>{t('contact.linkedin.action')}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* Card 4: Location & Availability */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  marginBottom: '16px'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                {t('contact.location.title')}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>
                {t('contact.location.value')}
              </h3>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#6ee7b7',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              <span className="beacon-dot" />
              <span>{t('contact.location.action')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
