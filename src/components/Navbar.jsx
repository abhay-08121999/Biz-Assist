import { useEffect, useState } from 'react';
import { siteConfig } from '../data/services.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi, I want to know more about your services.'
  )}`;

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="logo">{siteConfig.brandName}</a>
        <nav className="navbar__links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn--small">
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
