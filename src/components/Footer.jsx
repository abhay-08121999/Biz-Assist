import { siteConfig } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </div>
    </footer>
  );
}
