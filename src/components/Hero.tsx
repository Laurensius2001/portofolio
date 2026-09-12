import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { HeroStat } from '../types/portfolio';

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = useMemo(() => {
    return (t<string[]>('hero.roles')) || ['Full-Stack Web Developer', 'Web System Builder'];
  }, [t]);

  const typingSpeed = 120;
  const backspaceSpeed = 60;
  const pauseDuration = 2200;

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timerId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const fullText = roles[roleIndex] || '';

      if (isDeleting) {
        setDisplayText(fullText.substring(0, i - 1));
        i--;
      } else {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      }

      let delta = isDeleting ? backspaceSpeed : typingSpeed;

      if (!isDeleting && i === fullText.length) {
        delta = pauseDuration;
        isDeleting = true;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      timerId = setTimeout(tick, delta);
    };

    timerId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timerId);
  }, [roleIndex, roles]);

  const stats = (t<HeroStat[]>('hero.stats')) || [
    { value: '5+', label: 'Years Experience' },
    { value: '10+', label: 'Systems & Apps' },
    { value: '100%', label: 'Production Quality' }
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px'
          }}
        >
          {/* Left Hero Content */}
          <div style={{ zIndex: 10, textAlign: 'left' }}>
            {/* Availability Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="beacon-dot" />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#6ee7b7',
                  letterSpacing: '0.02em'
                }}
              >
                {t('hero.status')}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                fontWeight: '800',
                lineHeight: 1.12,
                marginBottom: '20px',
                letterSpacing: '-0.03em'
              }}
            >
              <span style={{ display: 'block', color: 'var(--text-main)' }}>
                Lorens Adonara,
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(30px, 4.2vw, 54px)', marginTop: '4px' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>{t('hero.rolePrefix')}</span>
                <span className="gradient-accent typing-cursor">
                  {displayText}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 'clamp(16px, 1.6vw, 19px)',
                maxWidth: '620px',
                lineHeight: 1.65,
                marginBottom: '36px'
              }}
            >
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
              <a href="#project" className="btn-primary">
                <span>{t('hero.button')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a href="#contact" className="btn-secondary">
                <span>{t('hero.contactBtn')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>

            {/* Key Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                maxWidth: '560px'
              }}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div
                    style={{
                      fontSize: 'clamp(24px, 3vw, 32px)',
                      fontWeight: '800',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.1,
                      marginBottom: '4px'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Profile Showcase */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              padding: '24px 20px'
            }}
          >
            {/* Ambient Profile Halo */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 180, 255, 0.25) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 75%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            />

            {/* Profile Outer Container with overflow: visible so badges never get clipped */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1 / 1.08',
                overflow: 'visible'
              }}
            >
              {/* Profile Card Frame */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '32px',
                  padding: '12px',
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(10, 16, 30, 0.95) 100%)',
                  border: '1px solid rgba(0, 180, 255, 0.3)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px -10px var(--primary-glow)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxSizing: 'border-box'
                }}
              >
                {/* Inner Image Container (clips the photo only) */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    background: '#090e1a',
                    position: 'relative'
                  }}
                >
                  <img
                    src="/profile.png"
                    alt="Lorens Adonara"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Subtle vignette gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(5, 8, 20, 0.7) 0%, transparent 40%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Badges (positioned on outer container with overflow: visible) */}
              {/* Badge 1: React.js (Top Left) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '-14px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 180, 255, 0.4)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 15px -2px var(--primary-glow)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00b4ff" strokeWidth="2">
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                </svg>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>React.js</span>
              </div>

              {/* Badge 2: Node.js / Backend (Bottom Right) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '-18px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.7)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>Node.js & APIs</span>
              </div>

              {/* Badge 3: PostgreSQL (Bottom Left) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '20px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.7)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#c7d2fe' }}>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
