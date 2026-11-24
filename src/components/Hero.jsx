import { siteConfig } from '../data/services.js';

export default function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi, I want a free consultation.'
  )}`;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="badge">For small businesses in India</span>
        <h1>
          Never miss a customer.<br />
          <span className="gradient-text">Never lose a lead.</span>
        </h1>
        <p className="hero__sub">
          We set up AI chatbots that work 24x7 and CRMs that track every sale, so
          your team focuses on growing the business.
        </p>
        <div className="hero__actions">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn--primary">
            Get a free consultation
          </a>
          <a href="#services" className="btn btn--ghost">See services</a>
        </div>
        <div className="hero__stats">
          <div><strong>24x7</strong><span>Customer replies</span></div>
          <div><strong>100%</strong><span>Leads tracked</span></div>
          <div><strong>7 days</strong><span>Avg. setup time</span></div>
        </div>
      </div>
    </section>
  );
}
