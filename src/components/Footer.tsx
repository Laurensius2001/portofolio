import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#090a10', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        {/* Brand */}
        <div>
          <span style={{ fontFamily: 'var(--font-marker)', fontSize: '28px', color: '#ffffff', letterSpacing: '1px' }}>
            LORENS<span style={{ color: '#ccff00' }}>.</span>
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
            Full-Stack Web Developer & System Architect • Indonesia
          </p>
        </div>

        {/* Rights */}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#64748b' }}>
          © {new Date().getFullYear()} Lorens Adonara. All rights reserved.
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="btn-hero-outline"
          style={{ fontSize: '12px', padding: '8px 20px', gap: '6px' }}
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp style={{ width: '14px', height: '14px', color: '#ccff00' }} />
        </button>
      </div>
    </footer>
  );
}
