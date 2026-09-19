import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const emailValue = 'lorensadonara@gmail.com';
  const websiteValue = 'www.lorensius.dev';
  const phoneValue = '+62 813-3738-3282';
  const waUrl = 'https://wa.me/6281337383282?text=Halo%20Lorens,%20saya%20tertarik%20dengan%20portofolio%20Anda.';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} ${t<string>('contact.copied') || 'berhasil disalin!'}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section id="contact" className="editorial-contact-section">
      <div className="container">
        <div className="editorial-contact-grid">
          {/* Column 1 (Left): Editorial Title & Subtitle */}
          <div className="editorial-contact-left">
            <h2 className="editorial-contact-title">
              <span className="editorial-contact-title-top">
                {t<string>('contact.titleLine1') || "LET'S CREATE"}
              </span>
              <span className="editorial-contact-title-accent">
                {t<string>('contact.titleLine2') || 'SOMETHING GREAT'}
              </span>
            </h2>
            <p className="editorial-contact-sub">
              {t<string>('contact.subtitle') || "Have a project in mind? Let's build something that makes an impact."}
            </p>
          </div>

          {/* Column 2 (Center): QR Code + Scan Instruction with Curved Arrow */}
          <div className="editorial-contact-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-qr-box"
              title="Scan or Click to Chat on WhatsApp"
              aria-label="Scan or Click to Chat on WhatsApp"
            >
              <svg
                viewBox="0 0 27 27"
                shapeRendering="crispEdges"
                style={{ width: '100%', height: '100%' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#1F1D1A"
                  d="M1 1.5h7m2 0h1m2 0h1m5 0h7M1 2.5h1m5 0h1m2 0h1m1 0h1m3 0h1m2 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h9m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h4m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h4m1 0h3m2 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h4m4 0h1M1 9.5h1m1 0h5m2 0h2m2 0h1m1 0h2m1 0h5M4 10.5h1m3 0h2m3 0h1m6 0h1m3 0h1M1 11.5h2m1 0h2m1 0h2m3 0h2m1 0h2m2 0h4m1 0h2M1 12.5h1m10 0h2m1 0h2m1 0h3m4 0h1M3 13.5h1m2 0h2m1 0h1m1 0h1m2 0h1m1 0h2m1 0h3m1 0h3M1 14.5h3m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1m3 0h1m1 0h1m1 0h1M1 15.5h1m1 0h1m1 0h4m1 0h2m4 0h3m1 0h3m1 0h2M1 16.5h1m3 0h2m1 0h1m2 0h1m1 0h2m2 0h1m2 0h2m3 0h1M1 17.5h1m3 0h1m1 0h2m1 0h2m1 0h1m3 0h5m1 0h1M9 18.5h1m6 0h2m3 0h2M1 19.5h7m3 0h3m3 0h1m1 0h1m1 0h1m1 0h3M1 20.5h1m5 0h1m1 0h2m1 0h1m3 0h2m3 0h2M1 21.5h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h6m1 0h2M1 22.5h1m1 0h3m1 0h1m1 0h1m3 0h2m3 0h2m1 0h3m1 0h1M1 23.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h2m6 0h2m1 0h1M1 24.5h1m5 0h1m3 0h1m1 0h2m1 0h3m1 0h3m2 0h1M1 25.5h7m1 0h1m1 0h1m1 0h1m1 0h1m2 0h8"
                />
              </svg>
            </a>

            <div className="editorial-qr-meta">
              <span className="editorial-qr-label">
                {t<string>('contact.scanText1') || 'SCAN TO VISIT'}
                <br />
                {t<string>('contact.scanText2') || 'MY WEBSITE'}
              </span>
              <div className="editorial-qr-arrow">
                <svg
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="none"
                  stroke="#2D2A26"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 34 2 C 32 18, 20 25, 6 23" />
                  <path d="M 12 17 L 5 23 L 11 29" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Contact Direct Items */}
          <div className="editorial-contact-right">
            {/* WhatsApp Direct Chat */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-contact-item"
                title="Chat Langsung via WhatsApp"
              >
                <svg
                  className="editorial-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" />
                  <path d="M12 8l4 6-2 1-4-6" />
                </svg>
                <span>{phoneValue}</span>
              </a>
              <button
                onClick={() => handleCopy(phoneValue, 'WhatsApp')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9E988E',
                  padding: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 0.2s'
                }}
                title="Salin Nomor WhatsApp"
                aria-label="Salin Nomor WhatsApp"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C0B283')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9E988E')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a
                href={`mailto:${emailValue}`}
                className="editorial-contact-item"
                title="Send Email"
              >
                <svg
                  className="editorial-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>{emailValue}</span>
              </a>
              <button
                onClick={() => handleCopy(emailValue, 'Email')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9E988E',
                  padding: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 0.2s'
                }}
                title="Copy Email"
                aria-label="Copy Email"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C0B283')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9E988E')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            {/* Website / Portfolio */}
            <a
              href="#home"
              className="editorial-contact-item"
              title="Visit Website"
            >
              <svg
                className="editorial-contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{websiteValue}</span>
            </a>

            {/* Location */}
            <div className="editorial-contact-item" style={{ cursor: 'default' }}>
              <svg
                className="editorial-contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>{t<string>('contact.location.value') || 'Remote Worldwide'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Toast Feedback */}
      {toastMessage && (
        <div className="toast-notification">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
