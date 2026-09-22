import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem } from '../types/portfolio';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { t } = useLanguage();
  const projectsData = (t<ProjectItem[]>('projects.items')) || [];

  // All 6 featured projects in the infinite loop: Canalize, Srimart, Chata, Sodong, ZTech, Jatiroke
  const items = projectsData.slice(0, 6) || [];
  const N = items.length; // 6


  // Triplicate the cards array for seamless infinite looping in both forward & backward directions
  const allCards = N > 0 ? [...items, ...items, ...items] : [];

  // Start at middle set (index N = 5)
  const [currentIndex, setCurrentIndex] = useState(N);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Initial card width fallback
  const getInitialSlideWidth = () => {
    if (typeof window === 'undefined') return 280;
    const screenW = window.innerWidth;
    const maxContW = Math.min(screenW - 48, 1224);
    let visible = 4;
    if (screenW <= 580) visible = 1;
    else if (screenW <= 820) visible = 2;
    else if (screenW <= 1180) visible = 3;
    return Math.max(180, (maxContW - (visible - 1) * 16) / visible);
  };

  const [slideWidth, setSlideWidth] = useState<number>(getInitialSlideWidth);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isScrollMode, setIsScrollMode] = useState(false);

  // Measure container and compute exact card width for 4 visible cards (desktop)
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      let visible = 4; // Default: 4 cards visible
      if (window.innerWidth <= 580) visible = 1;
      else if (window.innerWidth <= 820) visible = 2;
      else if (window.innerWidth <= 1180) visible = 3;

      const gap = 16;
      const w = Math.max(160, (containerWidth - (visible - 1) * gap) / visible);
      setSlideWidth(w);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateDimensions());
    ro.observe(el);
    window.addEventListener('resize', updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  // Handle Lenis scroll lock for deep inspection modal
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [selectedProject]);

  const handleNext = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-slide every 3.2s on both desktop & mobile; pauses on hover or when modal is open
  useEffect(() => {
    if (isPaused || selectedProject || N <= 4) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, selectedProject, N, handleNext]);

  // Seamless jump without animation when reaching edge of middle set
  const handleTransitionEnd = () => {
    if (N === 0) return;
    if (currentIndex >= 2 * N) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Re-enable transition on the next animation frame after silent teleport
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  // Smooth Touch Swipe Support for Mobile (Manual Sliding)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.touches[0].clientX;
    const diffY = touchStartY.current - e.touches[0].clientY;

    // When horizontal movement dominates vertical scroll and exceeds 10px, flag as active swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - endX;
    const diffY = touchStartY.current - endY;
    const elapsed = Date.now() - touchStartTime.current;

    // Detect intentional horizontal swipe gesture (distance > 30px or quick flick > 18px)
    const isHorizontal = Math.abs(diffX) > Math.abs(diffY);
    const isIntentionalDist = Math.abs(diffX) > 30 || (elapsed < 300 && Math.abs(diffX) > 18);

    if (isHorizontal && isIntentionalDist) {
      isSwiping.current = true;
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      // Pause auto-slide briefly after a manual swipe so timer resets from the new position
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }

    touchStartX.current = null;
    touchStartY.current = null;

    // Prevent immediate synthetic click event on card from opening modal
    if (isSwiping.current) {
      setTimeout(() => {
        isSwiping.current = false;
      }, 200);
    }
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  const openModal = (proj: ProjectItem) => {
    if (isSwiping.current) return;
    setSelectedProject(proj);
    setActiveImgIndex(0);
    setIsScrollMode(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Format clean punchy display title & category matching reference mockup aesthetic
  const getCardDisplayMeta = (project: ProjectItem) => {
    const title = project.title;
    if (title.includes('Canalize')) {
      return { displayTitle: 'CANALIZE.ASIA', displayCategory: 'Platform E-Commerce' };
    }
    if (title.includes('SRIMART')) {
      return { displayTitle: 'SRIMART GROSIR', displayCategory: 'Sistem B2B & Apriori' };
    }
    if (title.includes('Chata')) {
      return { displayTitle: 'CHATA NAIL ART', displayCategory: 'Engine Reservasi Salon' };
    }
    if (title.includes('Sodong')) {
      return { displayTitle: 'BTS SODONG NET', displayCategory: 'Manajemen ISP & POS' };
    }
    if (title.includes('ZTECH') || title.includes('ZTech') || title.includes('7 SOL')) {
      return { displayTitle: 'PT - ZTECH', displayCategory: 'Inovasi Energi 7 SOL' };
    }
    if (title.includes('Jatiroke')) {
      return { displayTitle: 'DESA JATIROKE', displayCategory: 'Sistem Informasi Publik' };
    }
    return {
      displayTitle: title.split(' - ')[0].replace(/\(.*?\)/g, '').trim().toUpperCase(),
      displayCategory: project.category.split('/')[0].trim()
    };
  };

  // Current primary focus dot (0 to 4)
  const activeDotIndex = N > 0 ? ((currentIndex % N) + N) % N : 0;

  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className={`projects-root-section ${isVisible ? 'is-revealed' : ''}`}>
      <div className="projects-section-container">

        {/* Large Rounded Container Matching Reference Design */}
        <div className={`projects-big-card ${isVisible ? 'is-revealed' : ''}`}>

          {/* Doodle 1: Orange Cartoon Creature Face (Top Right on border) */}
          <svg
            className="doodle-cat-top-right reveal-item reveal-pop-bounce"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#ff5500"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Left ear */}
            <path d="M 20 25 C 18 16, 15 8, 16 4 C 18 2, 24 10, 27 18" />
            {/* Right ear (taller) */}
            <path d="M 33 18 C 36 8, 42 2, 45 4 C 47 7, 44 16, 42 25" />
            {/* Head and cheeks curve */}
            <path d="M 16 28 C 10 36, 12 50, 22 56 C 30 60, 42 59, 48 49 C 52 41, 48 29, 42 25" />
            {/* Mischievous left eye */}
            <path d="M 23 33 Q 26 29, 29 33" />
            <circle cx="26" cy="34" r="1.5" fill="#ff5500" />
            {/* Sly right eye */}
            <path d="M 37 32 Q 41 30, 44 33" />
            {/* Happy smiling open mouth */}
            <path d="M 29 41 Q 34 49, 39 41 Z" fill="#ff5500" />
          </svg>

          {/* Doodle 2: Neon Lime Scribble Zig-Zag (Bottom Left outside) */}
          <svg
            className="doodle-scribble-bottom-left reveal-item reveal-pop reveal-delay-2"
            width="52"
            height="52"
            viewBox="0 0 56 56"
            fill="none"
            stroke="#ccff00"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M 10 50 L 22 36 L 16 33 L 34 16 L 27 14 L 46 4" />
            <path d="M 38 42 L 48 34" strokeWidth="2.6" />
            <path d="M 44 50 L 52 46" strokeWidth="2.6" />
          </svg>

          {/* HEADER ROW: Title + Purple Squiggle on Left, Auto-Slide & Nav Controls on Right */}
          <div className="featured-header-row">
            <div className="featured-title-group reveal-item reveal-fade-up">
              <div className="featured-title-badge-row">
                <h2 className="featured-main-title">
                  KARYA TERPILIH
                </h2>
                {/* Purple Squiggle Doodle (Directly next to title) */}
                <svg
                  className="featured-squiggle-svg"
                  viewBox="0 0 54 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 3 9 Q 10 2, 17 9 T 31 9 T 45 9 T 52 9"
                    stroke="#a855f7"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="featured-main-desc">
                Koleksi proyek pilihan yang menunjukkan keahlian rekayasa sistem, desain antarmuka, dan pemecahan masalah operasional nyata.
              </p>
            </div>

            {/* Slider Controls: Auto-slide Status Pill & Manual Arrow Buttons */}
            <div className="carousel-controls-group reveal-item reveal-fade-left reveal-delay-2">
              <div
                className="carousel-status-pill"
                title={isPaused ? "Slide otomatis dijeda saat mouse berada di kartu" : "Slide otomatis aktif (1 2 3 4 5 berulang terus)"}
              >
                <span className={`carousel-status-pulse ${isPaused ? 'paused' : 'running'}`}></span>
                <span className="carousel-status-label">{isPaused ? 'DIJEDA' : 'AUTO-SLIDE'}</span>
              </div>
              <div className="carousel-nav-buttons">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="carousel-arrow-btn"
                  aria-label="Slide sebelumnya"
                  title="Sebelumnya"
                >
                  <ChevronLeft style={{ width: '18px', height: '18px' }} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="carousel-arrow-btn"
                  aria-label="Slide berikutnya"
                  title="Berikutnya"
                >
                  <ChevronRight style={{ width: '18px', height: '18px' }} />
                </button>
              </div>
            </div>
          </div>

          {/* INFINITE SLIDER CAROUSEL TRACK (4 CARDS VISIBLE BY DEFAULT) */}
          <div
            ref={containerRef}
            className="carousel-viewport reveal-item reveal-card reveal-delay-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div
              className="carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: 'flex',
                gap: '16px',
                transform: slideWidth > 0 ? `translate3d(-${currentIndex * (slideWidth + 16)}px, 0, 0)` : 'none',
                transition: withTransition ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                willChange: 'transform'
              }}
            >
              {allCards.map((project, idx) => {
                const projectImages = project.images || [];
                const cardThumbnail = project.thumbnail || projectImages[0] || '/projects/canalize-1.png';
                const { displayTitle, displayCategory } = getCardDisplayMeta(project);

                return (
                  <div
                    key={`${project.title}-${idx}`}
                    onClick={() => {
                      if (!isSwiping.current) {
                        openModal(project);
                      }
                    }}
                    className="project-item-card carousel-card-slide"
                    style={{
                      width: slideWidth > 0 ? `${slideWidth}px` : undefined,
                      flex: slideWidth > 0 ? `0 0 ${slideWidth}px` : '0 0 calc((100% - 48px) / 4)'
                    }}
                  >
                    {/* Top Artwork / Screenshot Box (Flush to edges) */}
                    <div className="project-card-img-box">
                      <img
                        src={cardThumbnail}
                        alt={project.title}
                        className="project-card-thumb"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Meta Box */}
                    <div className="project-card-meta">
                      <h3 className="project-card-name">{displayTitle}</h3>
                      <div className="project-card-sub-row">
                        <p className="project-card-category">{displayCategory}</p>
                        <ArrowUpRight className="project-card-arrow" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CAROUSEL FOOTER BAR (DOTS NAVIGATION + COUNTER) */}
          <div className="carousel-footer-bar reveal-item reveal-fade-up reveal-delay-4">
            <div className="carousel-dots-list">
              {items.map((proj, i) => {
                const { displayTitle } = getCardDisplayMeta(proj);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setWithTransition(true);
                      setCurrentIndex(N + i);
                    }}
                    className={`carousel-dot-btn ${activeDotIndex === i ? 'active' : ''}`}
                    aria-label={`Pindah ke ${displayTitle}`}
                    title={`Lihat ${displayTitle}`}
                  >
                    <span className="carousel-dot-pill"></span>
                  </button>
                );
              })}
            </div>
            <div className="carousel-indicator-text">
              <span className="carousel-index-current">{activeDotIndex + 1}</span>
              <span className="carousel-index-sep">/</span>
              <span className="carousel-index-total">{N} KARYA</span>
            </div>
          </div>

        </div>

      </div>

      {/* Deep Inspection Modal (Preserves all system details, gallery, & live links) */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          data-lenis-prevent="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <div className="modal-header-row">
              <div className="modal-header-meta">
                <span className="modal-project-category">
                  {selectedProject.category}
                </span>
                <h3 className="modal-project-title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="modal-close-btn"
                aria-label="Tutup Detail"
              >
                <X style={{ width: '18px', height: '18px' }} />
              </button>
            </div>

            {/* Gallery Slider */}
            {(() => {
              const modalImages = selectedProject.images || [];
              const currentImg = modalImages[activeImgIndex] || modalImages[0] || '/projects/canalize-1.png';
              const isTall = currentImg.includes('ztech-2') || currentImg.includes('chata-landing') || currentImg.includes('canalize-1');

              return (
                <>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: isScrollMode ? '460px' : '400px',
                      borderRadius: '16px',
                      overflowY: isScrollMode ? 'auto' : 'hidden',
                      overflowX: 'hidden',
                      background: '#07080c',
                      marginTop: '20px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: isScrollMode ? 'flex-start' : 'center'
                    }}
                  >
                    {/* Scroll Mode Toggle for tall screenshots */}
                    {isTall && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsScrollMode(!isScrollMode);
                        }}
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'rgba(10, 12, 18, 0.88)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(204, 255, 0, 0.45)',
                          color: '#ccff00',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          cursor: 'pointer',
                          zIndex: 10,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isScrollMode ? 'Mode Pas (Fit View)' : 'Mode Gulir Penuh (Scroll Web)'}
                      </button>
                    )}

                    <img
                      src={currentImg}
                      alt={selectedProject.title}
                      style={
                        isScrollMode
                          ? { width: '100%', maxWidth: '640px', height: 'auto', display: 'block', margin: '0 auto' }
                          : { width: '100%', height: '100%', objectFit: 'contain' }
                      }
                    />
                    {modalImages.length > 1 && !isScrollMode && (
                      <>
                        <button
                          onClick={() => setActiveImgIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1))}
                          style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ffffff', zIndex: 5 }}
                        >
                          <ChevronLeft style={{ width: '18px', height: '18px' }} />
                        </button>
                        <button
                          onClick={() => setActiveImgIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1))}
                          style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ffffff', zIndex: 5 }}
                        >
                          <ChevronRight style={{ width: '18px', height: '18px' }} />
                        </button>
                      </>
                    )}
                  </div>

                  {modalImages.length > 1 && (
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '12px 0' }}>
                      {modalImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveImgIndex(idx);
                            setIsScrollMode(false);
                          }}
                          style={{
                            width: '80px',
                            height: '56px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: activeImgIndex === idx ? '2px solid #ccff00' : '1px solid rgba(255,255,255,0.1)',
                            opacity: activeImgIndex === idx ? 1 : 0.6,
                            cursor: 'pointer',
                            padding: 0,
                            background: 'none',
                            flexShrink: 0
                          }}
                        >
                          <img src={img} alt="Thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}

            {/* Description */}
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#ccff00', textTransform: 'uppercase', letterSpacing: '1px' }}>
                System Overview
              </h4>
              <p style={{ marginTop: '8px', fontSize: '15px', color: '#cbd5e1', lineHeight: 1.6 }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Engineering Highlights */}
            {selectedProject.highlights && (
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Key Engineering Highlights
                </h4>
                <ul style={{ listStyle: 'none', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedProject.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#cbd5e1' }}>
                      <Sparkles style={{ width: '14px', height: '14px', color: '#ccff00', flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags & Live Link */}
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', color: '#cbd5e1' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-lime"
                  style={{ textDecoration: 'none', padding: '10px 24px', fontSize: '13px' }}
                >
                  <span>Launch Live Site</span>
                  <ExternalLink style={{ width: '14px', height: '14px' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

