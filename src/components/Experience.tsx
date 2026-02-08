import { useState, useEffect } from 'react';

const Experience = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const experienceData = [
        {
            period: 'December 2025 - Present',
            position: 'Web Developer',
            company: 'PT. Gunung Amal Solution Internasional'
        },
        {
            period: 'May 2025 - June 2025',
            position: 'Fullstack Developer',
            company: 'Website Development for Jatiroke Village'
        },
        {
            period: 'April 2025 - August 2025',
            position: 'Fullstack Developer',
            company: 'Vendor Catalog App'
        },
        {
            period: 'February 2025 - March 2025',
            position: 'Web Developer',
            company: 'Canalize.asia Online Store (Shopify-based)'
        },
        {
            period: 'January 2025 - February 2025',
            position: 'Fullstack Developer',
            company: 'Netiva Application - Freelance'
        },
        {
            period: 'March 2023 - December 2024',
            position: 'Manage Operation Level 2 UMAX, DAVA and ENOM - TLKM',
            company: 'PT. Sigma Solusi Integrasi (Programmer)'
        },
        {
            period: 'May 2021 - November 2023',
            position: 'Full Stack Web Developer',
            company: 'PT. Gunung Amal Solution Internasional'
        },
        {
            period: 'September 2020 - September 2021',
            position: 'System Administrator and Support',
            company: 'PT. Gunung Amal Solution Internasional'
        },
        {
            period: 'March 2019 - End of March 2019',
            position: 'Internship',
            company: 'PT. Gunung Amal Solution Internasional'
        }
    ];

    return (
        <section id="experience" className="container" style={{ marginBottom: isMobile ? '60px' : '80px', textAlign: isMobile ? 'left' : 'center' }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '32px'
            }}>
                Work Experience
            </p>

            <div style={{ maxWidth: '800px', margin: isMobile ? '0' : '0 auto', textAlign: 'left' }}>
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        style={{
                            padding: isMobile ? '16px 0' : '20px 0',
                            borderBottom: index < experienceData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                color: 'var(--primary)',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: '600',
                                letterSpacing: '0.5px'
                            }}>
                                {exp.period}
                            </p>
                        </div>
                        <h3 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            color: 'var(--text-main)',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '600',
                            marginBottom: '4px'
                        }}>
                            {exp.position}
                        </h3>
                        <p style={{
                            fontSize: isMobile ? '14px' : '15px',
                            color: 'var(--text-muted)',
                            fontFamily: 'Poppins, sans-serif'
                        }}>
                            {exp.company}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
