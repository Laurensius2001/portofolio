import { useLanguage } from '../context/LanguageContext';
import { Terminal, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" style={{ padding: '80px 24px', backgroundColor: '#0d0e15' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#ccff00', fontFamily: 'var(--font-marker)' }}>✦</span>
            <span style={{ fontFamily: 'var(--font-doodle)', fontSize: '24px', fontWeight: 700, color: '#ccff00' }}>
              Get to know me
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-marker)', fontSize: '48px', color: '#ffffff', letterSpacing: '1px' }}>
            ABOUT <span style={{ color: '#ccff00' }}>LORENS</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#94a3b8', maxWidth: '600px' }}>
            {t<string>('about.title') || 'Crafting resilient web systems from architecture to interface.'}
          </p>
        </div>

        {/* Story Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
          
          {/* Left Card: Who I Am */}
          <div style={{ background: '#141522', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(124,58,237,0.2)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Terminal style={{ width: '20px', height: '20px' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800 }}>
                  {language === 'en' ? 'Who I Am' : 'Siapa Saya'}
                </h3>
              </div>
              <p style={{ marginTop: '16px', fontSize: '15px', color: '#cbd5e1', lineHeight: 1.65 }}>
                {t<string>('about.p1') ||
                  "Hi, I'm Lorens Adonara — a Senior Full-Stack Web Developer based in Indonesia. I specialize in building end-to-end web applications, data-driven systems, and scalable APIs that solve complex operational problems."}
              </p>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ccff00', boxShadow: '0 0 10px #ccff00' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>
                5+ Years Engineering Web Applications & Systems
              </span>
            </div>
          </div>

          {/* Right Card: What I Do */}
          <div style={{ background: '#141522', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(37,99,235,0.2)', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu style={{ width: '20px', height: '20px' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800 }}>
                  {language === 'en' ? 'What I Do' : 'Apa yang Saya Kerjakan'}
                </h3>
              </div>
              <p style={{ marginTop: '16px', fontSize: '15px', color: '#cbd5e1', lineHeight: 1.65 }}>
                {t<string>('about.p2') ||
                  'With experience spanning ISP customer service ticketing, municipal government portals, vendor catalogs, and e-commerce architectures, I bring technical discipline, clean modular code, and high performance to every project.'}
              </p>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
              <CheckCircle2 style={{ width: '16px', height: '16px', color: '#ccff00' }} />
              <span>Production-Ready Clean Architecture & High Reliability</span>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div style={{ background: '#141520', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(204,255,0,0.15)', color: '#ccff00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Sparkles style={{ width: '22px', height: '22px' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>
              {language === 'en' ? 'Clean Architecture' : 'Arsitektur Bersih'}
            </h4>
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
              Designing maintainable, decoupled codebases with structured APIs and clean folder conventions.
            </p>
          </div>

          <div style={{ background: '#141520', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(124,58,237,0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Cpu style={{ width: '22px', height: '22px' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>
              {language === 'en' ? 'High-Performance Backends' : 'Backend Berperforma Tinggi'}
            </h4>
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
              Developing secure RESTful endpoints, optimized relational and graph database queries, and background processes.
            </p>
          </div>

          <div style={{ background: '#141520', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(37,99,235,0.15)', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Layers style={{ width: '22px', height: '22px' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>
              {language === 'en' ? 'Intuitive Frontends' : 'Antarmuka Pengguna Modern'}
            </h4>
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
              Crafting responsive, accessible, and fast client applications with modern React, TypeScript, and fluid animations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
