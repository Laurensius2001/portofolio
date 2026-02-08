import { useState, useEffect } from 'react';

const Skills = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const skillsData = [
        'Team Collaboration',
        'JavaScript',
        'jQuery',
        'Database MySQL (v5.6, Neo.4j)',
        'HTML, CSS, XML, YAML, PUG',
        'Network Visual JavaScript (vis.js)',
        'PHP, PHP My Admin, XAMPP',
        'Neo.4j Graph DB',
        'Data Analyst',
        'Kibana',
        'Leaflet.js',
        'Bootstrap 3, 4, 5',
        'React.js',
        'Shopify',
        'WordPress',
        'CodeIgniter 3, 4',
        'Laravel',
        'Elasticsearch',
        'Swagger UI',
        'PostgreSQL C++',
        'Linux',
        'Tailwind CSS',
        'Ajax.json',
        'Node.js',
        'Restful API',
        'Vue.js',
        'Ms. Word, Ms. Excel'
    ];

    return (
        <section id="skills" className="container" style={{
            marginBottom: isMobile ? '60px' : '80px',
            textAlign: isMobile ? 'left' : 'center'
        }}>
            <p style={{
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '24px'
            }}>
                Skills
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '8px' : '12px',
                justifyContent: isMobile ? 'flex-start' : 'center',
                maxWidth: '900px',
                margin: isMobile ? '0' : '0 auto'
            }}>
                {skillsData.map((skill, index) => (
                    <span key={index} className="badge" style={{ fontSize: isMobile ? '13px' : '14px' }}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
