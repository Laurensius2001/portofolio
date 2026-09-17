import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = unknown>(key: string) => T;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      status: 'Available for New Projects & Roles',
      iam: 'HELLO, I AM',
      rolePrefix: 'a Senior ',
      giantTitle: 'PORTFOLIO',
      badgeYear: 'Portfolio 2026',
      subheading: 'Visual Aesthetics & Modern Web Engineering',
      roles: ['Full-Stack Web Developer', 'Web System Builder', 'Backend & API Architect'],
      description: 'Over 5+ years engineering scalable web applications, robust backend architectures, and high-performance interfaces with modern, clean engineering practices.',
      button: 'Explore Works',
      contactBtn: 'Get in Touch',
      stats: [
        { value: '5+', label: 'Years Experience' },
        { value: '10+', label: 'Systems & Apps' },
        { value: '100%', label: 'Production Quality' }
      ],
      ticker: [
        'Full-Stack Web Development',
        'Backend & REST API Architecture',
        'Enterprise Web Systems',
        'Shopify Liquid & E-Commerce',
        'PostgreSQL & Modern Databases',
        'Clean Code & High Performance',
        'React.js & TypeScript',
        'Cloud Infrastructure & Reliability'
      ]
    },
    about: {
      badge: 'About Me',
      title: 'Crafting resilient web systems from architecture to interface.',
      p1: "Hi, I'm Lorens Adonara — a Senior Full-Stack Web Developer based in Indonesia. I specialize in building end-to-end web applications, data-driven systems, and scalable APIs that solve complex operational problems.",
      p2: "With experience spanning ISP customer service ticketing, municipal government portals, vendor catalogs, and e-commerce architectures, I bring technical discipline, clean modular code, and high performance to every project.",
      pillars: [
        {
          title: 'Clean Architecture',
          desc: 'Designing maintainable, decoupled codebases with structured APIs and clean folder conventions.'
        },
        {
          title: 'High-Performance Backends',
          desc: 'Developing secure RESTful endpoints, optimized relational and graph database queries, and background processes.'
        },
        {
          title: 'Intuitive Frontends',
          desc: 'Crafting responsive, accessible, and fast client applications with modern React, Vue, and vanilla UI.'
        }
      ],
      focusTitle: 'Current Core Focus',
      focusDesc: 'Full-stack enterprise systems, RESTful microservices, real-time dashboards, and PostgreSQL/Node.js architecture.'
    },
    services: {
      badge: 'Services',
      title: 'Comprehensive Solutions',
      subtitle: 'Engineered for reliability, scalability, and measurable business impact.',
      items: [
        {
          title: 'Full-Stack Web Applications',
          desc: 'End-to-end development of custom web applications tailored to your specific business logic and user needs.',
          tags: ['React.js', 'Node.js', 'PHP', 'TypeScript']
        },
        {
          title: 'Backend & RESTful API Engineering',
          desc: 'High-throughput, secure RESTful APIs with Swagger documentation, authentication, and robust validation.',
          tags: ['Node.js', 'Express', 'Swagger UI', 'JWT']
        },
        {
          title: 'ISP & Enterprise Management Systems',
          desc: 'Specialized complaint ticketing workflows, bandwidth monitoring, customer billing, and POS thermal printing.',
          tags: ['PostgreSQL', 'Ticket Flow', 'POS Integration', 'ISP Mgmt']
        },
        {
          title: 'Admin Dashboards & Data Analytics',
          desc: 'Interactive administration panels with role-based access control (RBAC), metrics visualization, and exportable reports.',
          tags: ['vis.js', 'Kibana', 'Data Tables', 'Charts']
        },
        {
          title: 'Database Architecture & Optimization',
          desc: 'Schema design, indexing, performance tuning, and complex relational or graph database querying.',
          tags: ['PostgreSQL', 'MySQL', 'Neo4j', 'Elasticsearch']
        },
        {
          title: 'E-commerce & Custom CMS Solutions',
          desc: 'Custom Shopify Liquid theme modifications, WordPress architectures, and bespoke content management tools.',
          tags: ['Shopify', 'Liquid', 'WordPress', 'CodeIgniter']
        }
      ]
    },
    experience: {
      badge: 'Career Path',
      title: 'Work Experience',
      showMore: 'View Previous Experience',
      showMoreDesc: 'Explore earlier career roles (2019 – 2025)',
      showLess: 'Show Less',
      pastRolesHeading: 'Earlier Career History',
      items: [
        {
          period: 'Dec 2025 - Present',
          position: 'Web Developer',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Leading full-stack web development initiatives, maintaining enterprise platforms, and architecting internal tools.',
          tags: ['Full-Stack', 'Enterprise', 'Architecture']
        },
        {
          period: 'May 2025 - Jun 2025',
          position: 'Fullstack Developer',
          company: 'Website Development for Jatiroke Village',
          desc: 'Architected the official municipal digital portal, resident census database management, and administrative dashboards.',
          tags: ['CodeIgniter', 'MySQL', 'Bootstrap', 'Admin Dashboard']
        },
        {
          period: 'Apr 2025 - Aug 2025',
          position: 'Fullstack Developer',
          company: 'Vendor Catalog App',
          desc: 'Developed interactive vendor catalog system with dynamic filtering, inquiry pipelines, and admin data management.',
          tags: ['React', 'Node.js', 'Catalog Engine']
        },
        {
          period: 'Feb 2025 - Mar 2025',
          position: 'Web Developer',
          company: 'Canalize.asia Online Store (Shopify-based)',
          desc: 'Engineered custom storefront modifications, responsive layouts, Liquid templates, and checkout integration.',
          tags: ['Shopify', 'Liquid', 'E-commerce']
        },
        {
          period: 'Jan 2025 - Feb 2025',
          position: 'Fullstack Developer',
          company: 'Netiva Application - Freelance',
          desc: 'Delivered customized client web application with rapid turn-around, responsive UI, and secure database backplane.',
          tags: ['Full-Stack', 'REST API', 'Freelance']
        },
        {
          period: 'Mar 2023 - Dec 2024',
          position: 'Operation Level 2 UMAX, DAVA & ENOM - TLKM',
          company: 'PT. Sigma Solusi Integrasi (Programmer)',
          desc: 'Supported Tier-2 operations for high-volume Telkom systems (UMAX, DAVA, ENOM), debugging services and ensuring system uptime.',
          tags: ['Telkom Systems', 'L2 Support', 'High Availability', 'Debugging']
        },
        {
          period: 'May 2021 - Nov 2023',
          position: 'Full Stack Web Developer',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Built internal web applications, managed relational databases, and engineered client-facing portals.',
          tags: ['Web Dev', 'Database Management', 'PHP']
        },
        {
          period: 'Sep 2020 - Sep 2021',
          position: 'System Administrator and Support',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Administered internal network infrastructure, server maintenance, and technical operational support.',
          tags: ['Linux', 'System Admin', 'Infrastructure']
        },
        {
          period: 'Mar 2019',
          position: 'Internship',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Early industry internship focusing on web fundamentals and system maintenance.',
          tags: ['Internship', 'Web Basics']
        }
      ]
    },
    education: {
      badge: 'Academics',
      title: 'Education',
      items: [
        {
          institution: 'Universitas ARS Bandung',
          degree: 'Bachelor of Informatics Engineering (S1 Teknik Informatika)',
          period: '2020 - 2025',
          status: 'Graduated'
        },
        {
          institution: 'SMK ICB Cinta Teknika Bandung',
          degree: 'Vocational High School - Computer & Network Engineering',
          period: '2017 - 2020',
          status: 'Completed'
        },
        {
          institution: 'SMP Lamatewelu',
          degree: 'Junior High School',
          period: '2014 - 2017',
          status: 'Completed'
        },
        {
          institution: 'SDK Tobi',
          degree: 'Elementary School',
          period: '2008 - 2014',
          status: 'Completed'
        }
      ]
    },
    skills: {
      badge: 'Technical Arsenal',
      title: 'Skills & Stack',
      subtitle: 'Battle-tested tools and frameworks used across production deployments.',
      categories: [
        {
          name: 'Frontend Development',
          icon: 'layout',
          items: ['React.js', 'Vue.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap 5', 'vis.js', 'Leaflet.js']
        },
        {
          name: 'Backend & APIs',
          icon: 'server',
          items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'RESTful APIs', 'Swagger UI', 'Linux / Bash']
        },
        {
          name: 'Databases & Storage',
          icon: 'database',
          items: ['PostgreSQL', 'MySQL', 'Neo4j (Graph DB)', 'Elasticsearch', 'XAMPP / phpMyAdmin']
        },
        {
          name: 'Platforms & Tools',
          icon: 'cpu',
          items: ['Shopify (Liquid)', 'WordPress', 'Git & GitHub', 'Kibana', 'Postman', 'Thermal POS System']
        }
      ]
    },
    projects: {
      badge: 'Selected Works',
      title: 'Featured Projects',
      subtitle: 'Production web applications, information systems, and e-commerce platforms.',
      viewlive: 'Visit Live Site',
      confidential: 'Production System (Private / Offline)',
      zoom: 'Zoom image',
      items: [
        {
          title: 'Canalize.asia Online Apparel Store',
          category: 'E-commerce Platform',
          description: 'A premium streetwear online storefront built on Shopify. Designed custom Liquid templates, responsive shopping catalog, payment gateway configuration, and seamless mobile commerce experience.',
          tags: ['Shopify', 'Liquid', 'E-commerce', 'Responsive UX'],
          highlights: [
            'Customized storefront theme architecture',
            'Mobile-first checkout and shopping flow',
            'Integrated domestic Indonesian payment methods'
          ],
          link: 'https://canalize.asia',
          images: [
            '/projects/canalize-1.png',
            '/projects/canalize-2.png',
            '/projects/canalize-3.png',
            '/projects/canalize-4.png'
          ]
        },
        {
          title: 'SRIMART GROSIR - Wholesale Grocery E-Commerce & Apriori Recommendation',
          category: 'B2B / Wholesale E-Commerce Platform',
          description: 'An end-to-end full-stack wholesale grocery e-commerce platform built independently with Laravel 11 and MySQL. Features intelligent product recommendation powered by the Apriori Data Mining Algorithm to analyze transaction patterns and suggest frequent bundles, multi-category inventory catalog, integrated cart, and multi-method checkout (Bank Transfers & QRIS).',
          tags: ['Laravel 11', 'MySQL', 'Bootstrap 5', 'Blade', 'Apriori Algorithm', 'Full-Stack'],
          highlights: [
            'Apriori data mining algorithm for intelligent frequent itemset recommendations',
            'Interactive wholesale catalog with category filtering and real-time stock monitoring',
            'Complete checkout flow supporting multi-bank transfers (BCA, Mandiri, BRI) and QRIS'
          ],
          link: null,
          images: [
            '/projects/srimart-1.png',
            '/projects/srimart-2.png',
            '/projects/srimart-3.png',
            '/projects/srimart-4.png',
            '/projects/srimart-5.png'
          ]
        },
        {
          title: 'Chata Nail Art & Studio - Online Booking Engine & Salon Management System',
          category: 'Salon Booking & Studio Management Platform',
          description: 'A full-stack appointment booking and beauty salon management web platform built with Laravel 12 and Tailwind CSS. Features an intelligent Real-Time Slot Engine with anti-double-booking protection based on treatment duration, automated 1-click WhatsApp instant communication templates, friction-free client reservation without mandatory login, and an administrative studio dashboard for real-time calendar schedules, revenue tracking, and service catalog management.',
          tags: ['Laravel 12', 'Tailwind CSS', 'Blade', 'Vite', 'Slot Engine', 'WhatsApp Automation', 'Full-Stack'],
          highlights: [
            'Real-Time Slot Engine with anti-double-booking protection based on service duration',
            'Automated 1-click WhatsApp instant customer communication (Confirmation, Reschedule & Thank You)',
            'Comprehensive Studio Admin Dashboard with daily schedule monitoring, revenue analytics & service catalog'
          ],
          link: null,
          images: [
            '/projects/chata-landing.png',
            '/projects/chata-1.png',
            '/projects/chata-2.png',
            '/projects/chata-3.png',
            '/projects/chata-4.png'
          ]
        },
        {
          title: 'Internet Customer Complaint & Billing System (BTS Sodong Net)',
          category: 'ISP Management & Information System',
          description: 'A comprehensive full-stack operations management and customer service ticketing system engineered for BUMDes Tirta Sejahtera internet division. Features real-time ticket progression (Pending -> In Progress -> Resolved), bandwidth package management, active subscriber monitoring, and automated POS thermal receipt generation.',
          tags: ['React.js', 'Node.js', 'PostgreSQL', 'Swagger UI', 'RESTful API', 'Thermal POS'],
          highlights: [
            'Automated 3-stage ticketing workflow',
            'Full RESTful backend documented in Swagger UI',
            'Integrated direct thermal receipt printing for field officers'
          ],
          link: null,
          images: [
            '/projects/sodong-3.png',
            '/projects/sodong-2.png',
            '/projects/sodong-1.png'
          ]
        },
        {
          title: 'Official Municipal Digital Portal of Jatiroke Village',
          category: 'Government & Public Information System',
          description: 'The official digital government and public services platform for Jatiroke Village in Sumedang, West Java. Empowers local administration with citizen demographic records, administrative dashboards, news distribution, and tourism portals.',
          tags: ['CodeIgniter', 'Bootstrap', 'MySQL', 'Admin Dashboard'],
          highlights: [
            'Resident demographic and census data management',
            'Public news and village government announcement board',
            'Responsive citizen portal for public documents'
          ],
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
    contact: {
      badge: 'Contact',
      title: "Let's build something remarkable together.",
      subtitle: 'Available for freelance projects, technical consulting, and full-time senior engineering opportunities.',
      whatsapp: {
        title: 'WhatsApp Direct',
        action: 'Start WhatsApp Chat'
      },
      email: {
        title: 'Email Address',
        value: 'lorensadonara@gmail.com',
        action: 'Copy Email'
      },
      linkedin: {
        title: 'LinkedIn',
        value: 'Laurensius Suban',
        action: 'View Profile'
      },
      location: {
        title: 'Location & Availability',
        value: 'Bandung & Remote, Indonesia',
        action: 'Open Worldwide'
      },
      copied: 'Email copied to clipboard!'
    },
    common: {
      findMe: 'Find me on',
      copy: 'Copy',
      close: 'Close',
      scrollDown: 'Scroll down'
    },
    footer: {
      rights: 'Lorens Adonara. All rights reserved.',
      builtWith: 'Engineered with React, TypeScript & Modern Vanilla CSS.'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak'
    },
    hero: {
      status: 'Tersedia untuk Proyek & Posisi Baru',
      iam: 'HALO, SAYA',
      rolePrefix: 'Senior ',
      giantTitle: 'PORTOFOLIO',
      badgeYear: 'Portofolio 2026',
      subheading: 'Estetika Visual & Solusi Rekayasa Web Modern',
      roles: ['Pengembang Web Full-Stack', 'Pembangun Sistem Web', 'Arsitek Backend & API'],
      description: 'Lebih dari 5+ tahun membangun aplikasi web terukur, arsitektur backend tangguh, dan antarmuka performa tinggi dengan standar rekayasa modern yang bersih.',
      button: 'Lihat Portofolio',
      contactBtn: 'Hubungi Saya',
      stats: [
        { value: '5+', label: 'Tahun Pengalaman' },
        { value: '10+', label: 'Sistem & Web App' },
        { value: '100%', label: 'Kualitas Produksi' }
      ],
      ticker: [
        'Pengembangan Web Full-Stack',
        'Arsitektur Backend & REST API',
        'Sistem Web Enterprise',
        'Shopify Liquid & E-Commerce',
        'PostgreSQL & Basis Data Modern',
        'Rekayasa Kode Bersih & Teruji',
        'React.js & TypeScript',
        'Infrastruktur Cloud & Keandalan'
      ]
    },
    about: {
      badge: 'Tentang Saya',
      title: 'Membangun sistem web tangguh dari arsitektur backend hingga antarmuka.',
      p1: "Halo, saya Lorens Adonara — seorang Senior Full-Stack Web Developer asal Indonesia. Saya berfokus pada pengembangan sistem aplikasi web menyeluruh, arsitektur backend skala besar, serta API terintegrasi yang memecahkan kendala operasional nyata.",
      p2: "Dengan pengalaman merancang sistem tiket komplain ISP, portal digital pemerintahan desa, katalog vendor, hingga sistem toko online e-commerce, saya selalu mengedepankan kode yang bersih, aman, dan siap pakai di lingkungan produksi.",
      pillars: [
        {
          title: 'Arsitektur Bersih & Terstruktur',
          desc: 'Merancang codebase modular, terpisah rapi, dan mudah dirawat untuk pertumbuhan jangka panjang.'
        },
        {
          title: 'Backend & API Berperforma Tinggi',
          desc: 'Mengembangkan endpoint RESTful cepat, proteksi otentikasi ketat, serta optimasi query basis data relasional & graf.'
        },
        {
          title: 'Antarmuka Pengguna Modern',
          desc: 'Menciptakan frontend yang responsif, cepat diakses, dan intuitif dengan ekosistem modern React dan Vue.'
        }
      ],
      focusTitle: 'Fokus Utama Saat Ini',
      focusDesc: 'Sistem enterprise full-stack, RESTful microservices, dashboard operasional real-time, dan arsitektur PostgreSQL/Node.js.'
    },
    services: {
      badge: 'Layanan',
      title: 'Solusi Rekayasa Digital',
      subtitle: 'Dirancang untuk stabilitas, kecepatan, dan dampak bisnis yang terukur.',
      items: [
        {
          title: 'Aplikasi Web Full-Stack',
          desc: 'Pengembangan menyeluruh aplikasi web kustom yang disesuaikan dengan alur bisnis serta kebutuhan unik pengguna.',
          tags: ['React.js', 'Node.js', 'PHP', 'TypeScript']
        },
        {
          title: 'Rekayasa Backend & RESTful API',
          desc: 'Pembuatan API RESTful yang aman, cepat, terdokumentasi lengkap di Swagger UI, dan siap terintegrasi.',
          tags: ['Node.js', 'Express', 'Swagger UI', 'JWT']
        },
        {
          title: 'Sistem Manajemen Operasional & ISP',
          desc: 'Spesialisasi sistem tiket keluhan pelanggan, monitoring kuota/paket internet, dan cetak struk kasir thermal POS.',
          tags: ['PostgreSQL', 'Tiket Alur', 'POS Thermal', 'Manajemen ISP']
        },
        {
          title: 'Dashboard Admin & Visualisasi Data',
          desc: 'Panel kontrol interaktif dilengkapi manajemen hak akses bertingkat (RBAC), grafik analitik, dan export data.',
          tags: ['vis.js', 'Kibana', 'Tabel Dinamis', 'Grafik']
        },
        {
          title: 'Arsitektur & Optimasi Basis Data',
          desc: 'Perancangan skema relasional, indexing performa tinggi, serta query data kompleks pada database relasional maupun graph.',
          tags: ['PostgreSQL', 'MySQL', 'Neo4j', 'Elasticsearch']
        },
        {
          title: 'Solusi E-commerce & Kustom CMS',
          desc: 'Modifikasi tema Shopify (Liquid) toko online, pengembangan website berbasis WordPress, dan CMS CodeIgniter.',
          tags: ['Shopify', 'Liquid', 'WordPress', 'CodeIgniter']
        }
      ]
    },
    experience: {
      badge: 'Jejak Karier',
      title: 'Pengalaman Kerja',
      showMore: 'Lihat Pengalaman Sebelumnya',
      showMoreDesc: 'Jelajahi riwayat karier sebelumnya (2019 – 2025)',
      showLess: 'Tampilkan Lebih Sedikit',
      pastRolesHeading: 'Riwayat Karier Sebelumnya',
      items: [
        {
          period: 'Des 2025 - Sekarang',
          position: 'Web Developer',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Memimpin inisiatif pengembangan web full-stack, memelihara platform enterprise, dan merancang sistem operasional internal.',
          tags: ['Full-Stack', 'Enterprise', 'Arsitektur']
        },
        {
          period: 'Mei 2025 - Jun 2025',
          position: 'Fullstack Developer',
          company: 'Pengembangan Website Desa Jatiroke',
          desc: 'Merancang portal digital resmi desa, sistem informasi kependudukan, serta dashboard manajemen data publik.',
          tags: ['CodeIgniter', 'MySQL', 'Bootstrap', 'Dashboard Admin']
        },
        {
          period: 'Apr 2025 - Agu 2025',
          position: 'Fullstack Developer',
          company: 'Aplikasi Katalog Vendor',
          desc: 'Membangun aplikasi katalog vendor interaktif dengan filter dinamis, saluran inquiry, dan panel kelola produk.',
          tags: ['React', 'Node.js', 'Engine Katalog']
        },
        {
          period: 'Feb 2025 - Mar 2025',
          position: 'Web Developer',
          company: 'Toko Online Canalize.asia (Berbasis Shopify)',
          desc: 'Mengembangkan modifikasi template toko online Shopify, tata letak responsif, Liquid, dan integrasi pembayaran.',
          tags: ['Shopify', 'Liquid', 'E-commerce']
        },
        {
          period: 'Jan 2025 - Feb 2025',
          position: 'Fullstack Developer',
          company: 'Aplikasi Netiva - Freelance',
          desc: 'Menyelesaikan aplikasi web kustom untuk klien dengan performa responsif dan integrasi database aman.',
          tags: ['Full-Stack', 'REST API', 'Freelance']
        },
        {
          period: 'Mar 2023 - Des 2024',
          position: 'Manajemen Operasi Level 2 UMAX, DAVA & ENOM - TLKM',
          company: 'PT. Sigma Solusi Integrasi (Programmer)',
          desc: 'Dukungan operasional Level 2 untuk sistem berskala besar Telkom (UMAX, DAVA, ENOM), pemecahan masalah teknis dan menjaga ketersediaan sistem.',
          tags: ['Sistem Telkom', 'Support L2', 'Ketersediaan Tinggi', 'Debugging']
        },
        {
          period: 'Mei 2021 - Nov 2023',
          position: 'Full Stack Web Developer',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Membangun aplikasi web internal perusahaan, mengelola basis data relasional, dan portal layanan klien.',
          tags: ['Web Dev', 'Manajemen DB', 'PHP']
        },
        {
          period: 'Sep 2020 - Sep 2021',
          position: 'Administrator Sistem dan Dukungan',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Mengelola infrastruktur jaringan internal, pemeliharaan server, dan dukungan teknis operasional harian.',
          tags: ['Linux', 'System Admin', 'Infrastruktur']
        },
        {
          period: 'Mar 2019',
          position: 'Magang',
          company: 'PT. Gunung Amal Solution Internasional',
          desc: 'Magang industri awal berfokus pada fondasi pengembangan web dan pemeliharaan perangkat lunak.',
          tags: ['Magang', 'Fondasi Web']
        }
      ]
    },
    education: {
      badge: 'Pendidikan',
      title: 'Riwayat Pendidikan',
      items: [
        {
          institution: 'Universitas ARS Bandung',
          degree: 'Sarjana Teknik Informatika (S1)',
          period: '2020 - 2025',
          status: 'Lulus'
        },
        {
          institution: 'SMK ICB Cinta Teknika Bandung',
          degree: 'Teknik Komputer & Jaringan (TKJ)',
          period: '2017 - 2020',
          status: 'Lulus'
        },
        {
          institution: 'SMP Lamatewelu',
          degree: 'Sekolah Menengah Pertama',
          period: '2014 - 2017',
          status: 'Lulus'
        },
        {
          institution: 'SDK Tobi',
          degree: 'Sekolah Dasar',
          period: '2008 - 2014',
          status: 'Lulus'
        }
      ]
    },
    skills: {
      badge: 'Keahlian Teknis',
      title: 'Keahlian & Teknologi',
      subtitle: 'Peralatan dan framework andalan yang telah teruji pada lingkungan produksi.',
      categories: [
        {
          name: 'Frontend Development',
          icon: 'layout',
          items: ['React.js', 'Vue.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap 5', 'vis.js', 'Leaflet.js']
        },
        {
          name: 'Backend & APIs',
          icon: 'server',
          items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'RESTful APIs', 'Swagger UI', 'Linux / Bash']
        },
        {
          name: 'Basis Data & Penyimpanan',
          icon: 'database',
          items: ['PostgreSQL', 'MySQL', 'Neo4j (Graph DB)', 'Elasticsearch', 'XAMPP / phpMyAdmin']
        },
        {
          name: 'Platform & Peralatan',
          icon: 'cpu',
          items: ['Shopify (Liquid)', 'WordPress', 'Git & GitHub', 'Kibana', 'Postman', 'Sistem Thermal POS']
        }
      ]
    },
    projects: {
      badge: 'Karya Terpilih',
      title: 'Proyek Unggulan',
      subtitle: 'Sistem informasi, aplikasi web bisnis, dan platform e-commerce skala nyata.',
      viewlive: 'Buka Website Langsung',
      confidential: 'Sistem Produksi (Privat / Offline)',
      zoom: 'Perbesar gambar',
      items: [
        {
          title: 'Toko Online Busana Canalize.asia',
          category: 'Platform E-commerce',
          description: 'Toko online streetwear premium yang dibangun di atas platform Shopify. Merancang kustomisasi template Liquid tema toko, navigasi katalog produk responsif, integrasi payment gateway lokal, dan alur belanja cepat di ponsel.',
          tags: ['Shopify', 'Liquid', 'E-commerce', 'Desain Responsif'],
          highlights: [
            'Arsitektur tema storefront kustom yang cepat',
            'Alur checkout belanja yang dioptimalkan untuk mobile',
            'Integrasi metode pembayaran digital terpercaya'
          ],
          link: 'https://canalize.asia',
          images: [
            '/projects/canalize-1.png',
            '/projects/canalize-2.png',
            '/projects/canalize-3.png',
            '/projects/canalize-4.png'
          ]
        },
        {
          title: 'SRIMART GROSIR - E-Commerce Sembako & Rekomendasi Apriori',
          category: 'Platform E-Commerce B2B / Grosir Sembako',
          description: 'Sistem e-commerce grosir sembako end-to-end yang dibangun secara mandiri (full-stack) dengan Laravel 11 dan MySQL. Dilengkapi fitur Rekomendasi Cerdas berbasis Algoritma Apriori untuk menganalisis pola asosiasi transaksi dan merekomendasikan kombinasi produk sembako yang paling sering dibeli bersamaan, katalog multi-kategori, sistem keranjang belanja terintegrasi, serta alur checkout dan konfirmasi pembayaran multi-metode (Transfer Bank BCA, Mandiri, BRI, dan QRIS).',
          tags: ['Laravel 11', 'MySQL', 'Bootstrap 5', 'Blade', 'Algoritma Apriori', 'Full-Stack'],
          highlights: [
            'Algoritma Data Mining Apriori untuk rekomendasi cerdas kombinasi produk sembako',
            'Katalog grosir interaktif dengan filter kategori, pencarian SKU, dan status stok otomatis',
            'Alur keranjang belanja dan checkout lengkap dengan verifikasi transfer multi-bank & QRIS'
          ],
          link: null,
          images: [
            '/projects/srimart-1.png',
            '/projects/srimart-2.png',
            '/projects/srimart-3.png',
            '/projects/srimart-4.png',
            '/projects/srimart-5.png'
          ]
        },
        {
          title: 'Chata Nail Art & Studio - Sistem Reservasi Online & Manajemen Salon',
          category: 'Sistem Reservasi & Manajemen Salon Kecantikan',
          description: 'Platform aplikasi web reservasi jadwal dan manajemen operasional studio seni kuku (nail art) yang dibangun secara full-stack dengan Laravel 12 dan Tailwind CSS. Dilengkapi Real-Time Slot Engine dengan garansi anti-double-booking berbasis durasi perawatan kuku, integrasi komunikasi WhatsApp instan 1-klik dengan template pesan otomatis (konfirmasi, penolakan, dan terima kasih), formulir booking interaktif tanpa registrasi akun, serta dashboard manajemen studio untuk pemantauan antrean reservasi harian, jadwal kalender, estimasi omset, dan riwayat pelanggan.',
          tags: ['Laravel 12', 'Tailwind CSS', 'Blade', 'Vite', 'Slot Engine', 'Otomasi WhatsApp', 'Full-Stack'],
          highlights: [
            'Engine alokasi slot waktu real-time dengan garansi anti-bentrok jadwal berbasis durasi treatment',
            'Otomasi komunikasi pelanggan via WhatsApp instan 1-klik (Konfirmasi booking, reschedule & notifikasi)',
            'Dashboard Admin Chata Studio terpadu untuk monitoring jadwal kalender, katalog layanan & omset'
          ],
          link: null,
          images: [
            '/projects/chata-landing.png',
            '/projects/chata-1.png',
            '/projects/chata-2.png',
            '/projects/chata-3.png',
            '/projects/chata-4.png'
          ]
        },
        {
          title: 'Sistem Informasi Pelayanan Keluhan Pelanggan Internet (BTS Sodong Net)',
          category: 'Sistem Informasi & Manajemen ISP',
          description: 'Sistem informasi full-stack pelayanan keluhan dan manajemen operasional internet untuk unit usaha BUMDes Tirta Sejahtera (BTS Sodong Net). Dilengkapi alur penanganan tiket keluhan bertingkat (Menunggu -> Diproses -> Selesai), manajemen alokasi paket internet pelanggan, monitoring pelanggan aktif, hingga pencetakan struk bukti transaksi menggunakan printer thermal kasir (POS).',
          tags: ['React.js', 'Node.js', 'PostgreSQL', 'Swagger UI', 'RESTful API', 'Thermal POS'],
          highlights: [
            'Alur tiket penanganan keluhan 3 tahap otomatis',
            'Backend RESTful lengkap terdokumentasi rapi di Swagger UI',
            'Integrasi pencetakan langsung struk printer thermal kasir'
          ],
          link: null,
          images: [
            '/projects/sodong-3.png',
            '/projects/sodong-2.png',
            '/projects/sodong-1.png'
          ]
        },
        {
          title: 'Website Portal Resmi Pemerintah Desa Jatiroke',
          category: 'Sistem Informasi Publik & Pemerintahan',
          description: 'Portal layanan digital dan informasi publik resmi untuk Desa Jatiroke, Kabupaten Sumedang. Memberikan kemudahan administrasi desa melalui manajemen basis data kependudukan, dashboard data statistik kependudukan, publikasi berita, dan promosi potensi wisata desa.',
          tags: ['CodeIgniter', 'Bootstrap', 'MySQL', 'Dashboard Admin'],
          highlights: [
            'Manajemen data kependudukan dan statistik penduduk desa',
            'Papan publikasi berita dan pengumuman resmi desa',
            'Akses pelayanan publik terpadu yang responsif'
          ],
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
    contact: {
      badge: 'Kontak',
      title: 'Mari wujudkan solusi digital terbaik bersama.',
      subtitle: 'Terbuka untuk kolaborasi proyek freelance, konsultasi teknis, maupun kesempatan berkarier sebagai senior engineer.',
      whatsapp: {
        title: 'WhatsApp Langsung',
        action: 'Mulai Chat WhatsApp'
      },
      email: {
        title: 'Alamat Email',
        value: 'lorensadonara@gmail.com',
        action: 'Salin Email'
      },
      linkedin: {
        title: 'Profil LinkedIn',
        value: 'Laurensius Suban',
        action: 'Kunjungi Profil'
      },
      location: {
        title: 'Lokasi & Fleksibilitas',
        value: 'Bandung & Remote, Indonesia',
        action: 'Siap Kerja Jarak Jauh'
      },
      copied: 'Email berhasil disalin!'
    },
    common: {
      findMe: 'Temukan saya di',
      copy: 'Salin',
      close: 'Tutup',
      scrollDown: 'Gulir ke bawah'
    },
    footer: {
      rights: 'Lorens Adonara. Hak cipta dilindungi undang-undang.',
      builtWith: 'Dibuat dengan React, TypeScript & Modern Vanilla CSS.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = <T = unknown>(path: string): T => {
    return path.split('.').reduce((obj: Record<string, unknown> | undefined, key: string) => (obj && obj[key] !== undefined ? (obj[key] as Record<string, unknown>) : undefined), translations[language] as unknown as Record<string, unknown>) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
