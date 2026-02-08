import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            education: 'Education',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects'
        },
        hero: {
            iam: 'I AM',
            roles: ['Full-Stack Web Developer', 'Web System Builder'],
            description: 'I enjoy turning ideas into functional web systems. From designing interfaces to implementing backend logic, I focus on delivering solutions that are practical and scalable.',
            button: 'More About Us'
        },
        about: {
            title: 'About Me',
            p1: "Hi, I'm Lorens — a Full-Stack Web Developer based in Indonesia. I specialize in building web-based systems and applications, handling both frontend and backend development.",
            p2: "I have experience developing information systems, admin dashboards, and data-driven web applications. My focus is on creating scalable, efficient, and maintainable solutions that solve real-world problems."
        },
        services: {
            title: 'Services',
            items: [
                'Web Application Development',
                'Full-Stack Development',
                'Backend & API Development',
                'Admin Dashboard Development',
                'Information System Development',
                'Database Design & Management',
                'System Integration',
                'Responsive Web Development'
            ]
        },
        education: {
            title: 'Education',
            items: [
                { institution: 'ARS University (S1 Teknik Informatika)', period: '2020 - 2025' },
                { institution: 'SMK ICB Cinta Teknika Bandung', period: '2017 - 2020' },
                { institution: 'SMP Lamatewelu', period: '2014 - 2017' },
                { institution: 'SDK Tobi', period: '2008 - 2014' },
                { institution: 'TK Hermina Tobi', period: '2006 - 2008' }
            ]
        },
        experience: {
            title: 'Work Experience',
            items: [
                { period: 'December 2025 - Present', position: 'Web Developer', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'May 2025 - June 2025', position: 'Fullstack Developer', company: 'Website Development for Jatiroke Village' },
                { period: 'April 2025 - August 2025', position: 'Fullstack Developer', company: 'Vendor Catalog App' },
                { period: 'February 2025 - March 2025', position: 'Web Developer', company: 'Canalize.asia Online Store (Shopify-based)' },
                { period: 'January 2025 - February 2025', position: 'Fullstack Developer', company: 'Netiva Application - Freelance' },
                { period: 'March 2023 - December 2024', position: 'Manage Operation Level 2 UMAX, DAVA and ENOM - TLKM', company: 'PT. Sigma Solusi Integrasi (Programmer)' },
                { period: 'May 2021 - November 2023', position: 'Full Stack Web Developer', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'September 2020 - September 2021', position: 'System Administrator and Support', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'March 2019 - End of March 2019', position: 'Internship', company: 'PT. Gunung Amal Solution Internasional' }
            ]
        },
        skills: {
            title: 'Skills',
            items: [
                'Team Collaboration', 'JavaScript', 'jQuery', 'Database MySQL (v5.6, Neo.4j)',
                'HTML, CSS, XML, YAML, PUG', 'Network Visual JavaScript (vis.js)', 'PHP, PHP My Admin, XAMPP',
                'Neo.4j Graph DB', 'Data Analyst', 'Kibana', 'Leaflet.js', 'Bootstrap 3, 4, 5',
                'React.js', 'Shopify', 'WordPress', 'CodeIgniter 3, 4', 'Laravel', 'Elasticsearch',
                'Swagger UI', 'PostgreSQL C++', 'Linux', 'Tailwind CSS', 'Ajax.json', 'Node.js',
                'Restful API', 'Vue.js', 'Ms. Word, Ms. Excel'
            ]
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Selected Works',
            viewlive: 'View Live Website',
            confidential: 'Confidential / Offline',
            items: [
                {
                    title: 'Canalize.asia Online Store',
                    category: 'E-commerce (Shopify-based)',
                    description: 'A premium streetwear online store built on Shopify, featuring custom theme modifications, responsive design, and integrated payment systems.',
                    tags: ['Shopify', 'Liquid', 'E-commerce', 'Responsive Design'],
                    link: 'https://canalize.asia',
                    images: []
                },
                {
                    title: 'Official Website of Jatiroke Village',
                    category: 'Government & Information System',
                    description: 'The official digital portal for Jatiroke Village, Sumedang. Features include a public information system, admin dashboard for population data management, tourism portal, and village news.',
                    tags: ['CodeIgniter', 'Bootstrap', 'MySQL', 'Admin Dashboard'],
                    link: null,
                    images: [
                        '/projects/jatiroke-1.png',
                        '/projects/jatiroke-3.png',
                        '/projects/jatiroke-4.png',
                        '/projects/jatiroke-2.png'
                    ]
                }
            ]
        },
        common: {
            findMe: 'Find me on'
        }
    },
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            services: 'Layanan',
            education: 'Pendidikan',
            experience: 'Pengalaman Kerja',
            skills: 'Keahlian',
            projects: 'Proyek'
        },
        hero: {
            iam: 'SAYA ADALAH',
            roles: ['Pengembang Web Full-Stack', 'Pembangun Sistem Web'],
            description: 'Saya senang mengubah ide menjadi sistem web yang fungsional. Dari merancang antarmuka hingga mengimplementasikan logika backend, saya fokus pada penyampaian solusi yang praktis dan terukur.',
            button: 'Lebih Lanjut'
        },
        about: {
            title: 'Tentang Saya',
            p1: "Hai, saya Lorens — seorang Pengembang Web Full-Stack yang berbasis di Indonesia. Saya berspesialisasi dalam membangun sistem dan aplikasi berbasis web, menangani pengembangan frontend dan backend.",
            p2: "Saya memiliki pengalaman mengembangkan sistem informasi, dasbor admin, dan aplikasi web berbasis data. Fokus saya adalah menciptakan solusi yang terukur, efisien, dan mudah dipelihara untuk menyelesaikan masalah dunia nyata."
        },
        services: {
            title: 'Layanan',
            items: [
                'Pengembangan Aplikasi Web',
                'Pengembangan Full-Stack',
                'Pengembangan Backend & API',
                'Pengembangan Dashboard Admin',
                'Pengembangan Sistem Informasi',
                'Desain & Manajemen Database',
                'Integrasi Sistem',
                'Pengembangan Web Responsif'
            ]
        },
        education: {
            title: 'Pendidikan',
            items: [
                { institution: 'Universitas ARS (S1 Teknik Informatika)', period: '2020 - 2025' },
                { institution: 'SMK ICB Cinta Teknika Bandung', period: '2017 - 2020' },
                { institution: 'SMP Lamatewelu', period: '2014 - 2017' },
                { institution: 'SDK Tobi', period: '2008 - 2014' },
                { institution: 'TK Hermina Tobi', period: '2006 - 2008' }
            ]
        },
        experience: {
            title: 'Pengalaman Kerja',
            items: [
                { period: 'Desember 2025 - Sekarang', position: 'Pengembang Web', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'Mei 2025 - Juni 2025', position: 'Pengembang Fullstack', company: 'Pengembangan Website Desa Jatiroke' },
                { period: 'April 2025 - Agustus 2025', position: 'Pengembang Fullstack', company: 'Aplikasi Katalog Vendor' },
                { period: 'Februari 2025 - Maret 2025', position: 'Pengembang Web', company: 'Toko Online Canalize.asia (Berbasis Shopify)' },
                { period: 'Januari 2025 - Februari 2025', position: 'Pengembang Fullstack', company: 'Aplikasi Netiva - Freelance' },
                { period: 'Maret 2023 - Desember 2024', position: 'Manajemen Operasi Level 2 UMAX, DAVA dan ENOM - TLKM', company: 'PT. Sigma Solusi Integrasi (Programmer)' },
                { period: 'Mei 2021 - November 2023', position: 'Pengembang Web Full Stack', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'September 2020 - September 2021', position: 'Administrator Sistem dan Dukungan', company: 'PT. Gunung Amal Solution Internasional' },
                { period: 'Maret 2019 - Akhir Maret 2019', position: 'Magang', company: 'PT. Gunung Amal Solution Internasional' }
            ]
        },
        skills: {
            title: 'Keahlian',
            items: [
                'Kolaborasi Tim', 'JavaScript', 'jQuery', 'Database MySQL (v5.6, Neo.4j)',
                'HTML, CSS, XML, YAML, PUG', 'Visualisasi Jaringan JavaScript (vis.js)', 'PHP, PHP My Admin, XAMPP',
                'Neo.4j Graph DB', 'Analis Data', 'Kibana', 'Leaflet.js', 'Bootstrap 3, 4, 5',
                'React.js', 'Shopify', 'WordPress', 'CodeIgniter 3, 4', 'Laravel', 'Elasticsearch',
                'Swagger UI', 'PostgreSQL C++', 'Linux', 'Tailwind CSS', 'Ajax.json', 'Node.js',
                'Restful API', 'Vue.js', 'Ms. Word, Ms. Excel'
            ]
        },
        projects: {
            title: 'Proyek Unggulan',
            subtitle: 'Karya Terpilih',
            viewlive: 'Lihat Website Lengsung',
            confidential: 'Rahasia / Offline',
            items: [
                {
                    title: 'Toko Online Canalize.asia',
                    category: 'E-commerce (Berbasis Shopify)',
                    description: 'Toko online pakaian streetwear premium yang dibangun di Shopify, menampilkan modifikasi tema khusus, desain responsif, dan sistem pembayaran terintegrasi.',
                    tags: ['Shopify', 'Liquid', 'E-commerce', 'Desain Responsif'],
                    link: 'https://canalize.asia',
                    images: []
                },
                {
                    title: 'Website Resmi Desa Jatiroke',
                    category: 'Sistem Informasi & Pemerintahan',
                    description: 'Portal digital resmi untuk Desa Jatiroke, Sumedang. Fitur mencakup sistem informasi publik, dashboard admin untuk manajemen data penduduk, portal pariwisata, dan berita desa.',
                    tags: ['CodeIgniter', 'Bootstrap', 'MySQL', 'Dashboard Admin'],
                    link: null,
                    images: [
                        '/projects/jatiroke-1.png',
                        '/projects/jatiroke-3.png',
                        '/projects/jatiroke-4.png',
                        '/projects/jatiroke-2.png'
                    ]
                }
            ]
        },
        common: {
            findMe: 'Temukan saya di'
        }
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (path: string) => {
        return path.split('.').reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, translations[language] as any);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
