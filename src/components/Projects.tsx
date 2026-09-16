import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem } from '../types/portfolio';

const Projects = () => {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };

    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  const projectsData = (t<ProjectItem[]>('projects.items')) || [];

  return (
    <section id="project" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <span>{t<string>('projects.badge')}</span>
          </div>
          <h2 className="section-title gradient-text">
            {t<string>('projects.title')}
          </h2>
          <p className="section-desc">
            {t<string>('projects.subtitle')}
          </p>
        </div>

        {/* Projects Showcase Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1100px', margin: '0 auto' }}>
          {projectsData.map((project: ProjectItem, index: number) => {
            const images = project.images || [];
            const hasImages = images.length > 0;
            const currentImgIndex = selectedImages[index] || 0;
            const currentImg = hasImages ? images[currentImgIndex] : undefined;

            return (
              <div
                key={index}
                className="glass-card project-card"
              >
                {/* Left Side: Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
                  {/* Category Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: '100%' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 180, 255, 0.1)',
                        border: '1px solid rgba(0, 180, 255, 0.25)',
                        maxWidth: '100%',
                        wordBreak: 'break-word',
                        lineHeight: 1.4
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(20px, 2.4vw, 28px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '4px 0 8px 0', width: '100%' }}>
                      {project.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--accent-emerald)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, wordBreak: 'break-word', overflowWrap: 'break-word', flex: 1, minWidth: 0 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '8px 0', maxWidth: '100%' }}>
                    {project.tags.map((tag: string, tIdx: number) => (
                      <span key={tIdx} className="tech-pill" style={{ maxWidth: '100%', wordBreak: 'break-word' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div style={{ paddingTop: '12px' }}>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '11px 24px', fontSize: '14px' }}
                      >
                        <span>{t('projects.viewlive')}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ) : (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 18px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-muted)',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span>{t('projects.confidential')}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Visual Showcase */}
                <div style={{ width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
                  {hasImages ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', minWidth: 0 }}>
                      {/* Main Featured Image Box */}
                      <div
                        onClick={() => currentImg && setActiveImage(currentImg)}
                        style={{
                          aspectRatio: '16 / 10',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          background: '#090e1a',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          position: 'relative',
                          cursor: 'zoom-in',
                          boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      >
                        {currentImg && (
                          <img
                            src={currentImg}
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top',
                              transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                          />
                        )}

                        {/* Zoom Action Pill */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            background: 'rgba(5, 8, 20, 0.8)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-full)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#ffffff',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          <span>{t<string>('projects.zoom')}</span>
                        </div>
                      </div>

                      {/* Thumbnails Row */}
                      {images.length > 1 && (
                        <div
                          style={{
                            display: 'flex',
                            gap: '8px',
                            overflowX: 'auto',
                            maxWidth: '100%',
                            paddingBottom: '4px',
                            WebkitOverflowScrolling: 'touch',
                            boxSizing: 'border-box'
                          }}
                        >
                          {images.map((img: string, i: number) => {
                            const isSelected = i === currentImgIndex;
                            return (
                              <div
                                key={i}
                                onClick={() => setSelectedImages((prev) => ({ ...prev, [index]: i }))}
                                style={{
                                  width: '56px',
                                  height: '38px',
                                  flexShrink: 0,
                                  borderRadius: '8px',
                                  overflow: 'hidden',
                                  cursor: 'pointer',
                                  border: isSelected ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                                  opacity: isSelected ? 1 : 0.6,
                                  transition: 'all 0.2s ease',
                                  background: '#090e1a'
                                }}
                              >
                                <img src={img} alt={`Thumbnail ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Mockup Frame for Projects without Screenshot (e.g. Canalize E-commerce) */
                    <div
                      style={{
                        aspectRatio: '16 / 10',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '30px',
                        textAlign: 'center',
                        gap: '16px'
                      }}
                    >
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '20px',
                          background: 'rgba(0, 180, 255, 0.15)',
                          border: '1px solid rgba(0, 180, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary)'
                        }}
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="8" cy="21" r="1" />
                          <circle cx="19" cy="21" r="1" />
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                      </div>

                      <div>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                          Canalize.asia Storefront
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                          Shopify Liquid Architecture & Payment Integrations
                        </div>
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{ padding: '8px 18px', fontSize: '13px' }}
                        >
                          {t<string>('projects.viewlive')}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 8, 20, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              maxHeight: '92vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '-48px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              title="Close (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={activeImage}
              alt="Project enlarged preview"
              style={{
                maxWidth: '100%',
                maxHeight: '86vh',
                objectFit: 'contain',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.9)'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
