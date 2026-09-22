import { Globe, Code2, ShoppingCart, Zap } from 'lucide-react';

const skillBars = [
  { name: 'Full-Stack Web Dev', level: 95 },
  { name: 'Backend & Restful APIs', level: 92 },
  { name: 'Basis Data & PostgreSQL', level: 90 },
  { name: 'CMS & Shopify (Liquid)', level: 88 },
  { name: 'UI / UX & Desain Responsif', level: 92 },
  { name: 'Sistem & Integrasi POS', level: 86 },
];

const features = [
  {
    icon: Globe,
    title: 'Pengembangan End-to-End',
    desc: 'Membangun solusi lengkap dari antarmuka modern hingga infrastruktur basis data.',
  },
  {
    icon: Code2,
    title: 'Backend & Restful API',
    desc: 'Endpoint aman, logika bisnis teruji, dan arsitektur kode modular siap produksi.',
  },
  {
    icon: ShoppingCart,
    title: 'CMS & E-Commerce Platforms',
    desc: 'Kustomisasi tema Shopify Liquid, integrasi pembayaran, dan katalog produk.',
  },
  {
    icon: Zap,
    title: 'Performa & Integrasi Operasional',
    desc: 'Optimasi query database, integrasi cetak struk POS termal, dan keandalan sistem.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* ── Dekorasi tersebar di seluruh section ── */}
      <div className="skills-deco-overlay" aria-hidden="true">
        {/* Bintang besar lime — kiri atas */}
        <svg className="sdo sdo-star-1" viewBox="0 0 40 40" fill="none">
          <path d="M20 2 L23.5 15 L37 15 L26.5 23 L30 36 L20 28 L10 36 L13.5 23 L3 15 L16.5 15 Z" fill="#ccff00" opacity="0.8" />
        </svg>
        {/* Ring lime — kiri tengah bawah */}
        <svg className="sdo sdo-ring-1" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="24" stroke="#ccff00" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" />
        </svg>
        {/* Cross ungu — kiri bawah */}
        <svg className="sdo sdo-cross-1" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 V18 M2 10 H18" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        {/* Dot kolom 6 — kiri tengah */}
        <div className="sdo sdo-dots-col">
          {[...Array(6)].map((_, i) => <span key={i} className="sd-dot" />)}
        </div>
        {/* Bintang kecil putih — tengah kiri */}
        <svg className="sdo sdo-star-2" viewBox="0 0 24 24" fill="none">
          <path d="M12 1 L14.5 9 L23 9 L16 14 L18.5 22 L12 17 L5.5 22 L8 14 L1 9 L9.5 9 Z" fill="#ffffff" opacity="0.45" />
        </svg>
        {/* Ring ungu — tengah atas */}
        <svg className="sdo sdo-ring-2" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="28" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
        </svg>
        {/* Bintang lime — kanan tengah */}
        <svg className="sdo sdo-star-3" viewBox="0 0 32 32" fill="none">
          <path d="M16 1 L19.5 12 L31 12 L22 19 L25.5 30 L16 23 L6.5 30 L10 19 L1 12 L12.5 12 Z" fill="#ccff00" opacity="0.65" />
        </svg>
        {/* Cross putih — kanan atas */}
        <svg className="sdo sdo-cross-2" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 V18 M2 10 H18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        </svg>
        {/* Dot grid 3×3 — kanan bawah */}
        <div className="sdo sdo-dotgrid">
          {[...Array(9)].map((_, i) => <span key={i} className="sd-dot" />)}
        </div>
        {/* Ring kecil lime — kanan bawah */}
        <svg className="sdo sdo-ring-3" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#ccff00" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" opacity="0.5" />
        </svg>
        {/* Bintang kecil ungu — tengah bawah */}
        <svg className="sdo sdo-star-4" viewBox="0 0 20 20" fill="none">
          <path d="M10 1 L12 7.5 L19 7.5 L13.5 11.5 L15.5 18 L10 14 L4.5 18 L6.5 11.5 L1 7.5 L8 7.5 Z" fill="#a855f7" opacity="0.7" />
        </svg>
        {/* Ring lime tengah kanan */}
        <svg className="sdo sdo-ring-4" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="18" stroke="#ccff00" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      <div className="skills-3col">

        {/* KOLOM 1: Judul + Skill Bars */}
        <div className="skills-col skills-col--left">
          <h2 className="skills-title">
            KETERAMPILAN&amp; <span className="skills-title-accent">KEAHLIAN</span>
          </h2>

          <div className="skills-bars">
            {skillBars.map((s) => (
              <div key={s.name} className="skill-bar-row">
                <div className="skill-bar-label">
                  <span>{s.name}</span>
                  <span className="skill-bar-pct">{s.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KOLOM 2: Quote */}
        <div className="skills-col skills-col--quote">
          <span className="skills-quote-mark">"</span>
          <p className="skills-quote-text">
            Saya merancang sistem web tangguh dari arsitektur backend hingga antarmuka intuitif —
            memecahkan kendala operasional nyata dengan performa optimal.
          </p>
        </div>

        {/* KOLOM 3: Feature Cards */}
        <div className="skills-col skills-col--features">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="skills-feature-item">
                <div className="skills-feature-icon-wrap">
                  <Icon className="skills-feature-icon" />
                </div>
                <div>
                  <p className="skills-feature-title">{f.title}</p>
                  <p className="skills-feature-desc">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
