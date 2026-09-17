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
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '135px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Hero Container */}
      <div className="container" style={{ width: '100%', position: 'relative' }}>
        {/* Giant Typography Backdrop: PORTOFOLIO spanning full width of hero-editorial-layout */}
        <div className="hero-giant-bg" aria-hidden="true">
          {(t<string>('hero.giantTitle') || 'PORTOFOLIO').split('').map((char, idx) => (
            <span key={idx} className="hero-giant-char">
              {char}
            </span>
          ))}
        </div>

        {/* Symmetrical 3-Column Editorial Grid */}
        <div className="hero-editorial-layout">
          {/* Left Column: Identity, Typing Headline & CTAs */}
          <div className="hero-left">
            {/* Main Headline */}
            <h1 className="hero-main-title">
              <span className="hero-name-line">
                Lorens Adonara,
              </span>
              <span className="hero-role-line">
                <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>{t('hero.rolePrefix')} </span>
                <span className="gradient-accent typing-cursor">
                  {displayText}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#project" className="btn-primary" style={{ padding: '11px 24px', fontSize: '14px' }}>
                <span>{t('hero.button')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a href="#contact" className="btn-secondary" style={{ padding: '11px 22px', fontSize: '14px' }}>
                <span>{t('hero.contactBtn')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center Column: Cutout Portrait Seamlessly Overlapping Giant Typography */}
          <div className="hero-center" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            {/* Ambient Profile Halo Glow behind Cutout */}
            <div className="hero-avatar-glow" aria-hidden="true" />

            {/* Cutout Portrait Container (No background card/arch, seamless integration) */}
            <div className="hero-cutout-wrapper">
              <img
                src="/lorens-hero.png"
                alt="Lorens Adonara"
                className="hero-cutout-img"
              />

              {/* Floating Tech Badges */}
              {/* Badge 1: React.js (Left Shoulder) */}
              <div
                className="hero-tech-badge hero-tech-badge-react"
                style={{
                  position: 'absolute',
                  top: '18%',
                  left: '-20px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 180, 255, 0.4)',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 0 15px -2px var(--primary-glow)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00b4ff" strokeWidth="2">
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                </svg>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff' }}>React.js</span>
              </div>

              {/* Badge 2: Node.js / Backend (Right Torso) */}
              <div
                className="hero-tech-badge hero-tech-badge-node"
                style={{
                  position: 'absolute',
                  bottom: '24%',
                  right: '-22px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff' }}>Node.js & APIs</span>
              </div>

              {/* Badge 3: PostgreSQL (Bottom Left) */}
              <div
                className="hero-tech-badge hero-tech-badge-pg"
                style={{
                  position: 'absolute',
                  bottom: '6%',
                  left: '-12px',
                  background: 'rgba(11, 18, 34, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8)',
                  zIndex: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#c7d2fe' }}>PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Value Statement & Glass Stat Cards */}
          <div className="hero-right" style={{ zIndex: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '380px', width: '100%' }}>
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  {t<string>('hero.subheading')}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#ffffff',
                    lineHeight: 1.35
                  }}
                >
                  Enterprise Systems, Scalable APIs & High-Performance UI
                </div>
              </div>

              {/* 3 Modern Glass Stat Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="hero-stat-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}
                  >
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: '800',
                        color: idx === 0 ? 'var(--primary)' : idx === 1 ? '#818cf8' : '#34d399',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 1
                      }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
