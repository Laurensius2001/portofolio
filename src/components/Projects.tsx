import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem } from '../types/portfolio';

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = (t<ProjectItem[]>('projects.items')) || [];

  // Active detail modal for a clicked project
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  const sliderRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isScrollingByCode = useRef(false);

  // Dynamically calculate how many cards are visible per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1100) {
        setCardsPerView(4);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, projectsData.length - cardsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // On mobile: scroll viewport to the correct card position (CSS scroll-snap handles snapping)
  useEffect(() => {
    if (cardsPerView !== 1 || !viewportRef.current) return;
    const el = viewportRef.current;
    const cardWidth = el.offsetWidth;
    isScrollingByCode.current = true;
    el.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
    // Reset flag after animation
    const t = setTimeout(() => { isScrollingByCode.current = false; }, 800);
    return () => clearTimeout(t);
  }, [currentIndex, cardsPerView]);

  // Detect manual swipe by listening to scroll events on viewport (mobile only)
  useEffect(() => {
    if (cardsPerView !== 1 || !viewportRef.current) return;
    const el = viewportRef.current;
    const handleScroll = () => {
      if (isScrollingByCode.current) return; // ignore programmatic scrolls
      const cardWidth = el.offsetWidth;
      if (cardWidth === 0) return;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(maxIndex, idx)));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [cardsPerView, maxIndex]);

  // Auto-slide effect every 3.5 seconds (paused on hover or when modal is open)
  useEffect(() => {
    if (isPaused || selectedProject || maxIndex === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3600);

    return () => clearInterval(timer);
  }, [isPaused, selectedProject, maxIndex, handleNext]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setSelectedImgIndex(0);
  };

  return (
    <section id="project" className="selected-projects-section">
      <div className="container">
        {/* Editorial Header Section */}
        <div className="selected-projects-header">
          {/* Left: Stacked Serif Title */}
          <div className="selected-projects-title-box">
            <h2 className="selected-projects-title">
              <span className="selected-title-dark">
                {t<string>('projects.selected1') || 'SELECTED'}
              </span>
              <span className="selected-title-accent">
                {t<string>('projects.selected2') || 'PROJECTS'}
              </span>
            </h2>
          </div>

          {/* Right: Curated Editorial Description (Rata Kanan) */}
          <div className="selected-projects-desc-box">
            <p className="selected-projects-desc">
              {t<string>('projects.curatedDesc') || 'Koleksi proyek pilihan yang menunjukkan keahlian rekayasa sistem, desain antarmuka, dan pemecahan masalah operasional nyata.'}
            </p>
          </div>
        </div>

        {/* Carousel Slider Container (Default 4 cards, Auto-Slide) */}
        <div
          className="selected-slider-container"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev Navigation Button */}
          {maxIndex > 0 && (
            <button
              onClick={handlePrev}
              className="selected-slider-nav-btn prev"
              aria-label="Previous Project"
              title="Sebelumnya"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Slider Window — Mobile: CSS scroll-snap, Desktop: transform-based */}
          <div
            className="selected-slider-viewport"
            ref={viewportRef}
          >
            <div
              className="selected-slider-track"
              style={{
                transform: cardsPerView === 1
                  ? 'none'
                  : `translateX(-${currentIndex * (100 / cardsPerView + 1.5)}%)`
              }}
            >
              {projectsData.map((project: ProjectItem, index: number) => {
                const formattedNumber = String(index + 1).padStart(2, '0');
                const thumbnail = (project.images && project.images.length > 0)
                  ? project.images[0]
                  : '/projects/canalize-1.png';

                return (
                  <div
                    key={index}
                    className="selected-project-card"
                    onClick={() => openProjectModal(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project)}
                  >
                    {/* Project Thumbnail with Zoom on Hover */}
                    <div className="selected-project-thumb-box">
                      <img
                        src={thumbnail}
                        alt={project.title}
                        className="selected-project-img"
                        loading="lazy"
                      />
                      {/* Subtle hover overlay badge */}
                      <div className="selected-project-hover-overlay">
                        <span>Lihat Detail &rarr;</span>
                      </div>
                    </div>

                    {/* Meta Footer: Terracotta Number + Project Name & Subtitle */}
                    <div className="selected-project-meta">
                      <span className="selected-project-num">{formattedNumber}</span>
                      <div className="selected-project-text">
                        <h3 className="selected-project-name" title={project.title}>
                          {project.title}
                        </h3>
                        <span className="selected-project-category">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Navigation Button */}
          {maxIndex > 0 && (
            <button
              onClick={handleNext}
              className="selected-slider-nav-btn next"
              aria-label="Next Project"
              title="Berikutnya"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        {maxIndex > 0 && (
          <div className="selected-slider-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, dIdx) => (
              <button
                key={dIdx}
                onClick={() => setCurrentIndex(dIdx)}
                className={`selected-slider-dot ${currentIndex === dIdx ? 'active' : ''}`}
                aria-label={`Slide ke-${dIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail Project Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="project-modal-header">
              <div>
                <span className="project-modal-category">{selectedProject.category}</span>
                <h3 className="project-modal-title">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="project-modal-close-btn"
                aria-label="Tutup"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Gallery Preview */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="project-modal-gallery">
                <div className="project-modal-main-img-box">
                  <img
                    src={selectedProject.images[selectedImgIndex] || selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="project-modal-main-img"
                  />
                </div>

                {/* Thumbnails row */}
                {selectedProject.images.length > 1 && (
                  <div className="project-modal-thumbnails">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImgIndex(idx)}
                        className={`project-modal-thumb-btn ${selectedImgIndex === idx ? 'active' : ''}`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Modal Body: Description & Details */}
            <div className="project-modal-body">
              <p className="project-modal-desc">{selectedProject.description}</p>

              {/* Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="project-modal-highlights">
                  <h4 className="project-modal-subheading">Fitur & Solusi Utama</h4>
                  <ul className="project-modal-highlights-list">
                    {selectedProject.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="project-modal-tags">
                <h4 className="project-modal-subheading">Teknologi yang Digunakan</h4>
                <div className="project-modal-pills">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-modal-actions">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>{t<string>('projects.viewlive') || 'Buka Website Langsung'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ) : (
                  <span className="project-modal-confidential">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{t<string>('projects.confidential') || 'Sistem Produksi Enterprise'}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
