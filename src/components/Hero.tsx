import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const giantTitle = (t<string>('hero.giantTitle') || 'PORTOFOLIO').split('');

  return (
    <section id="home" className="hero-mockup-section">
      {/* Background Graphic Accents (Editorial Style from Reference) */}
      <div className="hero-editorial-graphics" aria-hidden="true">
        {/* Top-Left: Plain Text + Chevrons */}
        <div className="hero-decor-group-topleft">
          <span className="hero-decor-plain-text">{t<string>('hero.category') || 'WEB DESIGNER & DEVELOPER'}</span>
          <div className="hero-decor-chevrons">
            <svg width="38" height="10" viewBox="0 0 54 12" fill="#C0B283">
              <polygon points="0,0 7,6 0,12" />
              <polygon points="12,0 19,6 12,12" />
              <polygon points="24,0 31,6 24,12" />
              <polygon points="36,0 43,6 36,12" />
              <polygon points="48,0 55,6 48,12" />
            </svg>
          </div>
        </div>

        {/* Top-Right: Retro Sparkle Star & Corner Frame */}
        <div className="hero-decor-corner-arc">
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <path d="M 100 8 C 50 8, 8 50, 8 100" stroke="#373737" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.25" />
            <path d="M 100 20 C 60 20, 20 60, 20 100" stroke="#C0B283" strokeWidth="1.2" opacity="0.35" />
          </svg>
        </div>

        <div className="hero-decor-star-top">
          <svg width="34" height="34" viewBox="0 0 44 44" fill="none">
            <path
              d="M22 2 C22 13 22 13 33 22 C22 22 22 22 22 42 C22 31 22 31 11 22 C22 22 22 22 22 2 Z"
              fill="#373737"
            />
            <line x1="22" y1="0" x2="22" y2="44" stroke="#373737" strokeWidth="0.8" opacity="0.4" />
            <line x1="0" y1="22" x2="44" y2="22" stroke="#373737" strokeWidth="0.8" opacity="0.4" />
            <line x1="13" y1="13" x2="31" y2="31" stroke="#C0B283" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
            <line x1="31" y1="13" x2="13" y2="31" stroke="#C0B283" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>

        {/* Top-Right: Dot Matrix Grid */}
        <div className="hero-decor-dots-top">
          <svg width="34" height="42" viewBox="0 0 34 42" fill="#373737">
            <circle cx="4" cy="4" r="1.6" opacity="0.4" />
            <circle cx="13" cy="4" r="1.6" opacity="0.4" />
            <circle cx="22" cy="4" r="1.6" opacity="0.4" />
            <circle cx="31" cy="4" r="1.6" opacity="0.4" />

            <circle cx="4" cy="13" r="1.6" opacity="0.4" />
            <circle cx="13" cy="13" r="1.6" opacity="0.4" />
            <circle cx="22" cy="13" r="1.6" opacity="0.4" />
            <circle cx="31" cy="13" r="1.6" opacity="0.4" />

            <circle cx="4" cy="22" r="1.6" opacity="0.4" />
            <circle cx="13" cy="22" r="1.6" opacity="0.4" />
            <circle cx="22" cy="22" r="1.6" opacity="0.4" />
            <circle cx="31" cy="22" r="1.6" opacity="0.4" />

            <circle cx="4" cy="31" r="1.6" opacity="0.4" />
            <circle cx="13" cy="31" r="1.6" opacity="0.4" />
            <circle cx="22" cy="31" r="1.6" opacity="0.4" />
            <circle cx="31" cy="31" r="1.6" opacity="0.4" />

            <circle cx="4" cy="40" r="1.6" opacity="0.4" />
            <circle cx="13" cy="40" r="1.6" opacity="0.4" />
            <circle cx="22" cy="40" r="1.6" opacity="0.4" />
            <circle cx="31" cy="40" r="1.6" opacity="0.4" />
          </svg>
        </div>

        {/* Mid-Left: Cross / Plus Marker */}
        <div className="hero-decor-cross-left">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#C0B283" strokeWidth="2.2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </div>

        {/* Bottom-Left: 3 Parallel Wavy Lines (from reference) */}
        <div className="hero-decor-waves">
          <svg width="58" height="22" viewBox="0 0 72 26" fill="none" stroke="#373737" strokeWidth="1.8" strokeLinecap="round" opacity="0.55">
            <path d="M2 5 Q 11 -2, 20 5 T 38 5 T 56 5 T 70 5" />
            <path d="M2 13 Q 11 6, 20 13 T 38 13 T 56 13 T 70 13" />
            <path d="M2 21 Q 11 14, 20 21 T 38 21 T 56 21 T 70 21" />
          </svg>
        </div>

        {/* Bottom-Right: Pale Gold 4-Point Star Sparkle */}
        <div className="hero-decor-star-bottom">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="#C0B283">
            <path d="M14 1 C14 9 14 9 22 14 C14 14 14 14 14 27 C14 19 14 19 6 14 C14 14 14 14 14 1 Z" />
            <circle cx="14" cy="14" r="2" fill="#F4F4F4" />
          </svg>
        </div>
      </div>

      {/* Top Bar Marginalia */}
      <div className="hero-mockup-topbar">
        <div className="hero-top-left">
          {/* Terracotta 8-point asterisk */}
          <svg className="hero-asterisk-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
          </svg>
          <span className="hero-top-label">{t<string>('hero.category') || 'WEB DESIGNER'}</span>
        </div>

        <a href="#contact" className="hero-top-right">
          <span>{t<string>('hero.available') || 'AVAILABLE FOR FREELANCE'}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Main Composition Wrapper */}
      <div className="hero-mockup-main">
        {/* Left Vertical Marginalia Rail */}
        <aside className="hero-vertical-rail hero-rail-left" aria-hidden="true">
          <div className="hero-rail-line" />
          <span className="hero-rail-text">{t<string>('hero.rails.uiux') || 'UI / UX DESIGN'}</span>
          <div className="hero-rail-line" />
          <span className="hero-rail-text">{t<string>('hero.rails.webdev') || 'WEB DEVELOPMENT'}</span>
        </aside>

        {/* Center Stage with PORTFOLIO text, Terracotta Circle & Portrait */}
        <div className="hero-stage-container">
          {/* Giant Tall Typography Behind Portrait */}
          <div className="hero-giant-portfolio-text" aria-label={t<string>('hero.giantTitle') || 'PORTOFOLIO'} role="img">
            {giantTitle.map((char, idx) => (
              <span key={idx}>{char}</span>
            ))}
          </div>

          {/* Grid Layout: Left Details & Right Portrait Composition */}
          <div className="hero-content-grid">
            {/* Left Content Identity */}
            <div className="hero-identity-box">
              <span className="hero-hello-tag">
                {t<string>('hero.hello') || "HELLO, I'M"}
              </span>

              <h1 className="hero-name-title">
                {t<string>('hero.name') || 'LORENS ADONARA'}
              </h1>

              <div className="hero-tagline-accent">
                {t<string>('hero.tagline') || 'WEB DESIGNER & DIGITAL CREATIVE'}
              </div>

              <p className="hero-bio-paragraph">
                {t<string>('hero.bio') || 'seorang Senior Full-Stack Web Developer asal Indonesia. Saya berfokus pada pengembangan sistem aplikasi web menyeluruh, arsitektur backend skala besar, serta API terintegrasi yang memecahkan kendala operasional nyata.'}
              </p>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <a href="#project" className="btn-primary">
                  <span>{t<string>('hero.button') || 'Explore Works'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary">
                  <span>{t<string>('hero.contactBtn') || 'Get in Touch'}</span>
                </a>
              </div>
            </div>

            {/* Right Centerpiece: Dynamic Art Splash + Portrait + Doodle Crown + Smiley */}
            <div className="hero-visual-centerpiece">
              {/* Dynamic Artistic Yellow Splash Backdrop & Elements */}
              <div className="hero-art-backdrop-container" aria-hidden="true">
                {/* Bold Retro-Pop Ellipse Backdrop */}
                <svg className="hero-art-splash-svg" viewBox="0 0 500 500" fill="none">
                  {/* Big Bold Centered Ellipse — Pale Gold */}
                  <ellipse
                    cx="250"
                    cy="290"
                    rx="230"
                    ry="210"
                    fill="#C0B283"
                  />
                  {/* Angled paper cut at bottom-left */}
                  <path
                    d="M 20 500 L 20 430 L 160 500 Z"
                    fill="#F4F4F4"
                  />
                  {/* Inner depth layer — Silk soft overlay */}
                  <ellipse
                    cx="250"
                    cy="285"
                    rx="210"
                    ry="190"
                    fill="#DCD0C0"
                    opacity="0.45"
                  />
                </svg>

                {/* Orange/Gold Smiley Face Badge */}
                <div className="hero-art-smiley-badge">
                  <svg viewBox="0 0 100 100" className="hero-art-smiley-svg">
                    <circle cx="50" cy="50" r="46" fill="#C0B283" />
                    <ellipse cx="36" cy="42" rx="4.5" ry="7.5" fill="#373737" />
                    <ellipse cx="64" cy="42" rx="4.5" ry="7.5" fill="#373737" />
                    <path
                      d="M 30 58 Q 50 82 70 58"
                      fill="none"
                      stroke="#373737"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Charcoal Brush Hatch at bottom right */}
                <div className="hero-art-brush-scratch">
                  <svg viewBox="0 0 130 90" className="hero-art-scratch-svg">
                    <path d="M 15 75 Q 65 48 115 30" stroke="#373737" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 28 82 Q 75 56 122 40" stroke="#373737" strokeWidth="7" strokeLinecap="round" />
                    <path d="M 8 68 Q 55 42 105 22" stroke="#373737" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Hand-Drawn Doodle Crown above Lorens' Head */}
              <div className="hero-doodle-crown" aria-hidden="true">
                <svg viewBox="0 0 90 65" className="hero-doodle-crown-svg">
                  <path
                    d="M 12 50 L 6 16 L 28 28 L 45 8 L 62 28 L 84 16 L 78 50 Z"
                    fill="none"
                    stroke="#373737"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 10 50 Q 45 58 80 50"
                    fill="none"
                    stroke="#373737"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Doodle Action / Burst Lines at top right of head */}
              <div className="hero-doodle-burst" aria-hidden="true">
                <svg viewBox="0 0 60 60" className="hero-doodle-burst-svg">
                  <line x1="12" y1="44" x2="4" y2="56" stroke="#373737" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="28" y1="28" x2="38" y2="12" stroke="#373737" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="42" y1="42" x2="58" y2="34" stroke="#373737" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Cutout Portrait overlapping disc & title */}
              <div className="hero-photo-wrapper">
                <img
                  src="/lorens-hero.png"
                  alt="Lorens Adonara"
                  className="hero-mockup-portrait"
                />

                {/* Ripped Paper Tape Badge on Chest (Moved here like mockup) */}
                <div className="hero-photo-torn-badge" aria-hidden="true">
                  <svg className="hero-badge-torn-svg" viewBox="0 0 240 92" preserveAspectRatio="none">
                    <path
                      d="M 14 5
                         C 90 2, 170 5, 234 3
                         Q 238 24 235 46
                         Q 238 68 233 88
                         C 170 90, 90 88, 12 90
                         L 15 82 L 8 74 L 14 66 L 7 57 L 12 49 L 6 41 L 11 33 L 6 24 L 12 16 L 7 10 Z"
                      fill="#373737"
                    />
                  </svg>

                  <div className="hero-badge-inner">
                    <span className="hero-badge-name">Lorens Adonara</span>
                    <div className="hero-badge-role-group">
                      <span className="hero-badge-role">
                        {t<string>('hero.category') || 'WEB DESIGNER & DEVELOPER'}
                      </span>
                      <svg className="hero-badge-underline" viewBox="0 0 100 8" fill="none">
                        <path d="M 2 4 Q 50 1, 98 4" stroke="#C0B283" strokeWidth="2.8" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rotating Circular Stamp Badge */}
              <div className="hero-stamp-badge" title="Open for new projects">
                {/* SVG Rotating Curved Text */}
                <svg className="hero-stamp-svg" viewBox="0 0 160 160">
                  <path
                    id="circlePath"
                    d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                    fill="none"
                  />
                  <text className="hero-stamp-curved-text">
                    <textPath href="#circlePath" startOffset="0%">
                      AVAILABLE WORLDWIDE • OPEN FOR NEW PROJECTS •
                    </textPath>
                  </text>
                </svg>

                {/* Inner Center Content */}
                <div className="hero-stamp-center">
                  <span>OPEN</span>
                  <span>FOR NEW</span>
                  <span>PROJECTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Vertical Marginalia Rail */}
        <aside className="hero-vertical-rail hero-rail-right" aria-hidden="true">
          <span className="hero-rail-text">{t<string>('hero.rails.branding') || '@BRANDING'}</span>
          <div className="hero-rail-line" />
          <span className="hero-rail-text">{t<string>('hero.rails.digital') || 'DIGITAL EXPERIENCES'}</span>
        </aside>
      </div>

      {/* Bottom Horizontal Black Line (Identical to Mockup) */}
      <div className="hero-bottom-line-wrapper">
        <div className="hero-bottom-black-line" />
        <div className="hero-bottom-indicator">
          <div className="hero-bottom-left-meta">
            <span className="hero-indicator-num">01</span>
            <span className="hero-indicator-slash">/</span>
            <span>OVERVIEW</span>
          </div>
          <div className="hero-bottom-right-meta">
            <span className="hero-bottom-scroll-hint">SCROLL FOR DETAILS &darr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
