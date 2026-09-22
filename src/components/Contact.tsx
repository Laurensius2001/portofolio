import { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailValue = 'lorensadonara@gmail.com';
  const whatsappUrl = 'https://wa.me/6281337383282';
  const phoneDisplay = '+62 813-3738-3282';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer-contact">
      <div className="footer-3col">

        {/* BARIS HERO MOBILE: Karakter (kiri) + Headline (kanan) — hanya tampil di ≤580px */}
        <div className="fc-mobile-hero-row">
          {/* Karakter */}
          <div className="fc-col fc-col--char">
            <img
              src="/contact-character.png"
              alt="Waving Cartoon Character"
              className="footer-contact-character-img"
              loading="lazy"
            />
          </div>
          {/* Headline */}
          <div className="fc-col fc-col--headline">
            <p className="fc-line fc-line--white">MARI CIPTAKAN</p>
            <p className="fc-line fc-line--white fc-line--something">
              SESUATU YANG
              <svg className="fc-underline" viewBox="0 0 160 10" fill="none" aria-hidden="true" preserveAspectRatio="none">
                <path d="M 2 6 C 40 8, 100 3, 158 6" stroke="#ccff00" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </p>
            <p className="fc-line fc-line--awesome">
              <span className="fc-awesome-text">LUAR BIASA!</span>
              <svg className="fc-purple-loop" viewBox="0 0 220 60" fill="none" aria-hidden="true" preserveAspectRatio="none">
                <path
                  d="M 10 30 C 8 10, 70 2, 130 4 C 188 6, 212 20, 210 32 C 208 46, 148 54, 80 52 C 24 50, 8 38, 12 28"
                  stroke="#a855f7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

        {/* KOLOM 1: Kartun — desktop & tablet */}
        <div className="fc-col fc-col--char">
          <img
            src="/contact-character.png"
            alt="Waving Cartoon Character"
            className="footer-contact-character-img"
            loading="lazy"
          />
        </div>

        {/* KOLOM 2: Headline — desktop & tablet */}
        <div className="fc-col fc-col--headline">
          <p className="fc-line fc-line--white">MARI CIPTAKAN</p>
          <p className="fc-line fc-line--white fc-line--something">
            SESUATU YANG
            <svg className="fc-underline" viewBox="0 0 160 10" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <path d="M 2 6 C 40 8, 100 3, 158 6" stroke="#ccff00" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </p>
          <p className="fc-line fc-line--awesome">
            <span className="fc-awesome-text">LUAR BIASA!</span>
            <svg className="fc-purple-loop" viewBox="0 0 220 60" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <path
                d="M 10 30 C 8 10, 70 2, 130 4 C 188 6, 212 20, 210 32 C 208 46, 148 54, 80 52 C 24 50, 8 38, 12 28"
                stroke="#a855f7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>

        {/* KOLOM 3: Kontak */}
        <div className="fc-col fc-col--info">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fc-info-item">
            <Phone className="fc-info-icon" />
            <span>{phoneDisplay}</span>
          </a>

          <div className="fc-info-item fc-info-email" onClick={copyEmail} title="Klik untuk menyalin email">
            <Mail className="fc-info-icon" />
            <span>{emailValue}</span>
            {copied && <span className="fc-copied">✓ Disalin!</span>}
          </div>

          <div className="fc-info-item">
            <MapPin className="fc-info-icon" />
            <span className="fc-info-loc">Indonesia</span>
          </div>

          <button onClick={scrollToTop} className="btn-footer-back-top" aria-label="Kembali ke atas">
            <ArrowUp className="arrow-up-icon" />
          </button>
        </div>

      </div>
    </footer>
  );
}
