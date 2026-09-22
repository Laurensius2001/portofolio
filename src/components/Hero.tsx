import { Play, ArrowUpRight, Mouse } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="master-hero-root">
      
      {/* 1. Master Background: Deep Charcoal with Exact Paint Splatters */}
      <div className="master-bg-layer" aria-hidden="true">
        {/* Top-Left Organic Purple Paint Splash Blob */}
        <svg
          className="master-splash-top-left"
          viewBox="0 0 500 450"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 L 320 0 C 310 80, 290 130, 240 170 C 190 210, 170 260, 110 320 C 60 370, 20 410, 0 440 Z"
            fill="#7020e6"
          />
          {/* Splatter Droplets */}
          <circle cx="280" cy="180" r="12" fill="#7020e6" />
          <circle cx="310" cy="210" r="8" fill="#7020e6" />
          <circle cx="250" cy="240" r="10" fill="#7020e6" />
          <circle cx="180" cy="330" r="9" fill="#7020e6" />
          <circle cx="140" cy="370" r="7" fill="#7020e6" />
        </svg>

        {/* Bottom-Left Vibrant Cyan/Sky-Blue Ink Splatter */}
        <svg
          className="master-splash-bottom-left"
          viewBox="0 0 520 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 400 L 0 160 C 40 180, 70 230, 120 220 C 180 210, 200 270, 250 280 C 310 290, 360 340, 420 400 Z"
            fill="#0099ff"
          />
          {/* Droplets */}
          <circle cx="150" cy="160" r="10" fill="#0099ff" />
          <circle cx="180" cy="190" r="7" fill="#0099ff" />
          <circle cx="270" cy="230" r="12" fill="#0099ff" />
          <circle cx="330" cy="270" r="9" fill="#0099ff" />
          <circle cx="380" cy="320" r="14" fill="#0099ff" />
          <circle cx="430" cy="350" r="8" fill="#0099ff" />
        </svg>

        {/* Bottom-Right Paint Splash Droplets */}
        <svg
          className="master-splash-bottom-right"
          viewBox="0 0 200 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <circle cx="160" cy="130" r="28" fill="#7020e6" opacity="0.6" />
          <circle cx="110" cy="140" r="12" fill="#0099ff" opacity="0.7" />
          <circle cx="130" cy="110" r="8" fill="#ff3b30" opacity="0.7" />
        </svg>
      </div>

      {/* 2. Master Two-Column Hero Composition (Edge-to-Edge Full Width) */}
      <div className="master-hero-container">
        
        {/* LEFT COLUMN: GREETING, NAME, SUBTITLE, DESCRIPTION, CTAS */}
        <div className="master-hero-left">
          
          {/* "Halo," + Curved White Arrow + "Saya" */}
          <div className="master-hey-row hero-enter-hey">
            <span className="master-hey-text">Halo,</span>
            {/* Hand-drawn white arrow pointing towards "Saya" */}
            <svg
              className="master-curved-arrow"
              width="44"
              height="30"
              viewBox="0 0 46 32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 4 8 Q 24 4, 34 22" />
              <path d="M 24 20 L 34 22 L 34 12" />
            </svg>
            <span className="master-im-text">Saya</span>
          </div>

          {/* Giant Brush Headline with Floating Lime Crown */}
          <div className="master-headline-wrapper">
            {/* Lime Crown Doodle floating above name */}
            <div className="master-floating-crown hero-enter-crown">
              <svg width="48" height="34" viewBox="0 0 48 34" fill="none">
                <path
                  d="M 3 30 L 6 10 L 18 20 L 24 4 L 30 20 L 42 10 L 45 30 Z"
                  fill="#ccff00"
                  stroke="#ccff00"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Giant Name: LORENS ADONARA */}
            <h1 className="master-giant-name hero-enter-title">
              LORENS ADONARA
            </h1>

            {/* Thick Lime Brush Underline */}
            <svg
              className="master-brush-stroke-underline hero-enter-underline"
              viewBox="0 0 540 20"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 4 13 C 90 5, 270 16, 536 7 C 420 18, 170 9, 12 16"
                stroke="#ccff00"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Subtitle: WEB DESIGNER & DIGITAL CREATIVE */}
          <h2 className="master-subtitle hero-enter-subtitle">
            WEB DESIGNER & DIGITAL CREATIVE
          </h2>

          {/* Supporting Description */}
          <p className="master-description hero-enter-desc">
            seorang Senior Full-Stack Web Developer asal Indonesia. Saya berfokus pada pengembangan sistem aplikasi web menyeluruh, arsitektur backend skala besar, serta API terintegrasi yang memecahkan kendala operasional nyata.
          </p>

          {/* CTA Buttons (Matching Reference Pills) */}
          <div className="master-cta-group hero-enter-cta">
            {/* Primary Lime Green Pill Button */}
            <button
              onClick={() => scrollToSection('projects')}
              className="master-btn-lime"
            >
              <Play className="master-btn-play-icon" />
              <span>Explore My World</span>
            </button>

            {/* Secondary Purple-bordered Dark Pill Button */}
            <button
              onClick={() => scrollToSection('projects')}
              className="master-btn-dark-purple"
            >
              <span>View My Work</span>
              <ArrowUpRight className="master-btn-arrow-icon" />
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: FULL-WIDTH ANCHORED AVATAR WITH MANIK-MANIK DOODLES */}
        <div className="master-hero-right">
          <div className="master-character-wrapper hero-enter-character">
            
            {/* Desktop Red-Orange Graffiti Splatter & Spray */}
            <svg
              className="master-char-splatter-bg master-char-splatter-desktop"
              viewBox="0 0 450 700"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="charGraffitiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5722" />
                  <stop offset="35%" stopColor="#ff2a2a" />
                  <stop offset="75%" stopColor="#d90429" />
                  <stop offset="100%" stopColor="#9e0018" />
                </linearGradient>
              </defs>
              {/* Solid organic graffiti brush covering the top and right edge with no holes */}
              <path
                d="M 0 0 L 450 0 L 450 700 C 400 660, 360 580, 330 500 C 300 420, 270 360, 230 280 C 190 200, 150 140, 100 80 C 60 40, 25 15, 0 0 Z"
                fill="url(#charGraffitiGrad)"
                opacity="0.95"
              />
              {/* Secondary spray layer */}
              <path
                d="M 40 0 C 80 50, 130 110, 180 190 C 230 280, 250 380, 290 480 C 320 550, 360 620, 420 680 L 450 700 L 450 0 Z"
                fill="#ff3b30"
                opacity="0.5"
              />
              {/* Droplets & Spray Streaks */}
              <circle cx="50" cy="50" r="14" fill="#ff5722" />
              <circle cx="90" cy="90" r="10" fill="#ff4500" />
              <circle cx="35" cy="120" r="8" fill="#ff3b30" />
              <circle cx="130" cy="150" r="12" fill="#ff2a2a" />
              <circle cx="80" cy="220" r="9" fill="#ff5722" />
              <circle cx="160" cy="270" r="14" fill="#ff4500" />
              <circle cx="110" cy="340" r="8" fill="#ff3b30" />
              <circle cx="210" cy="390" r="13" fill="#d90429" />
              <circle cx="170" cy="460" r="10" fill="#ff5722" />
              <circle cx="270" cy="530" r="12" fill="#ff2a2a" />
              <circle cx="230" cy="600" r="8" fill="#ff4500" />
              <path d="M 70 120 Q 40 170, 60 210" stroke="#ff3b30" strokeWidth="5" strokeLinecap="round" />
              <path d="M 140 240 Q 110 300, 130 350" stroke="#ff5722" strokeWidth="6" strokeLinecap="round" />
              <path d="M 210 400 Q 180 470, 200 520" stroke="#ff4500" strokeWidth="5" strokeLinecap="round" />
            </svg>

            {/* Mobile Organic Wave Graffiti Splatter with Droplets (Matches bottom-left wave aesthetic) */}
            <svg
              className="master-char-splatter-bg master-char-splatter-mobile"
              viewBox="0 0 500 650"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="charGraffitiGradMob" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9e0018" />
                  <stop offset="25%" stopColor="#d90429" />
                  <stop offset="65%" stopColor="#ff2a2a" />
                  <stop offset="100%" stopColor="#ff5722" />
                </linearGradient>
              </defs>
              {/* Organic fluid paint wave emerging from bottom and wrapping up to the right with no straight borders */}
              <path
                d="M 50 650 C 40 560, 60 510, 100 460 C 140 410, 110 340, 180 270 C 240 210, 220 120, 310 70 C 370 35, 430 20, 500 10 L 500 650 Z"
                fill="url(#charGraffitiGradMob)"
                opacity="0.95"
              />
              {/* Secondary organic spray accent */}
              <path
                d="M 120 650 C 120 540, 160 460, 220 380 C 270 310, 290 200, 380 130 C 420 95, 460 70, 500 50 L 500 650 Z"
                fill="#ff3b30"
                opacity="0.45"
              />
              {/* Organic paint splash droplets along the wave edge */}
              <circle cx="85" cy="480" r="14" fill="#ff5722" />
              <circle cx="60" cy="430" r="8" fill="#ff3b30" />
              <circle cx="125" cy="380" r="11" fill="#ff2a2a" />
              <circle cx="95" cy="330" r="7" fill="#ff5722" />
              <circle cx="160" cy="275" r="15" fill="#ff5722" />
              <circle cx="130" cy="235" r="9" fill="#ff3b30" />
              <circle cx="210" cy="180" r="13" fill="#ff2a2a" />
              <circle cx="180" cy="140" r="8" fill="#ff5722" />
              <circle cx="270" cy="95" r="14" fill="#ff5722" />
              <circle cx="240" cy="65" r="9" fill="#ff2a2a" />
              <circle cx="340" cy="40" r="12" fill="#ff5722" />
              <circle cx="380" cy="18" r="7" fill="#ff3b30" />
              <circle cx="430" cy="10" r="9" fill="#ff5722" />
              {/* Organic fluid splash arc streaks */}
              <path d="M 140 330 Q 110 390, 130 450" stroke="#ff3b30" strokeWidth="6" strokeLinecap="round" />
              <path d="M 230 190 Q 200 260, 220 320" stroke="#ff5722" strokeWidth="5" strokeLinecap="round" />
            </svg>

            {/* Manik-manik 1: Blue Speech Bubble ("LET'S CREATE SOMETHING AWESOME!") */}
            <div className="master-speech-bubble-doodle hero-enter-bubble">
              <svg
                className="master-speech-svg"
                viewBox="0 0 220 145"
                fill="none"
              >
                {/* Comic Speech Bubble with Tail */}
                <path
                  d="M 40 10 C 15 10, 6 28, 6 56 C 6 84, 18 102, 48 102 C 68 102, 90 102, 110 102 C 122 102, 134 112, 142 126 C 145 132, 147 136, 149 138 C 149 130, 151 118, 155 102 C 182 102, 214 88, 214 56 C 214 26, 190 10, 150 10 Z"
                  fill="#00b4d8"
                  stroke="#000000"
                  strokeWidth="3.8"
                  strokeLinejoin="round"
                />
                <text
                  x="110"
                  y="42"
                  textAnchor="middle"
                  className="master-speech-svg-text"
                >
                  LET'S CREATE
                </text>
                <text
                  x="110"
                  y="65"
                  textAnchor="middle"
                  className="master-speech-svg-text"
                >
                  SOMETHING
                </text>
                <text
                  x="110"
                  y="88"
                  textAnchor="middle"
                  className="master-speech-svg-text highlight"
                >
                  AWESOME!
                </text>
              </svg>
            </div>

            {/* Manik-manik 2: Yellow Star Doodle (Floating Above Hair Right) */}
            <div className="master-star-doodle hero-enter-star">
              <svg width="48" height="48" viewBox="0 0 54 54" fill="none">
                <path
                  d="M 27 2 L 35 17 L 52 20 L 40 33 L 43 50 L 27 42 L 11 50 L 14 33 L 2 20 L 19 17 Z"
                  fill="#ffd60a"
                  stroke="#ffd60a"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Manik-manik 3: Motion wave arcs next to waving hand */}
            <div className="master-hand-motion-lines">
              <svg width="40" height="54" viewBox="0 0 40 54" fill="none">
                <path
                  d="M 10 8 C 24 20, 24 36, 10 48"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 24 16 C 34 24, 34 32, 24 40"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Manik-manik 4: White zig-zag scribble between hand and chest */}
            <div className="master-zigzag-scribble">
              <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
                <path
                  d="M 3 13 L 11 4 L 19 22 L 27 6 L 33 16"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Manik-manik 5: Blue circle scribble swirl above speech bubble */}
            <div className="master-blue-swirl-doodle">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path
                  d="M 8 23 C 8 11, 20 6, 32 11 C 42 17, 40 35, 28 39 C 16 41, 10 31, 18 21 C 24 15, 34 17, 36 25"
                  stroke="#00b4d8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="3 5"
                />
              </svg>
            </div>

            {/* Manik-manik 6: White action tick sparks above spiky hair */}
            <div className="master-hair-spark-doodle">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M 6 28 L 22 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 20 32 L 32 18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* The Character Image Asset (Clean Transparent PNG) */}
            <img
              src="/lorens-character.png"
              alt="Cartoon Character Illustration"
              className="master-character-img"
            />

          </div>
        </div>

      </div>

      {/* 3. CENTERED SCROLL DOWN INDICATOR WITH DOODLES */}
      <div className="master-scroll-down-center hero-enter-scroll">
        {/* White curved arrow pointing down */}
        <svg
          className="master-arrow-down-left"
          width="32"
          height="32"
          viewBox="0 0 36 36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 28 6 C 14 6, 8 18, 8 30" />
          <path d="M 2 24 L 8 30 L 14 24" />
        </svg>

        {/* Scroll Down Oval Pill */}
        <button
          onClick={() => scrollToSection('projects')}
          className="master-scroll-down-pill"
        >
          <Mouse style={{ width: '14px', height: '14px' }} />
          <span>Scroll Down</span>
        </button>

        {/* Lime Doodle Smiley Face */}
        <div className="master-smiley-face-doodle">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#ccff00" strokeWidth="2.5" />
            <circle cx="11" cy="12" r="2.2" fill="#ccff00" />
            <circle cx="21" cy="12" r="2.2" fill="#ccff00" />
            <path d="M 10 19 Q 16 26, 22 19" stroke="#ccff00" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Lime Neon Lightning Bolt */}
        <div className="master-lightning-bolt-doodle">
          <svg width="22" height="26" viewBox="0 0 24 28" fill="#ccff00">
            <polygon points="14 2 2 16 12 16 10 26 22 12 12 12 14 2" />
          </svg>
        </div>
      </div>

    </div>
  );
}


