import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle visibility
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate scroll progress percentage
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const totalHeight = scrollHeight - clientHeight;
            const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;

            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // Handle resize as well
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`scroll-top-btn ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            title="Scroll to Top"
        >
            <div className="wave-container" style={{ '--progress': `${100 - scrollProgress}%` } as any}>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: 'relative', zIndex: 2 }}
            >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
            </svg>
        </div>
    );
};

export default ScrollToTop;
