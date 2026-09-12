import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsVisible(scrollTop > 250);

      const totalHeight = scrollHeight - clientHeight;
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`scroll-top-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      title="Scroll to Top"
      aria-label="Scroll to top of page"
    >
      <svg width="44" height="44" viewBox="0 0 44 44" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
        {/* Background Track */}
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Active Progress Circle */}
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="var(--primary)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>

      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
  );
};

export default ScrollToTop;
