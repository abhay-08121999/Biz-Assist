import { siteConfig } from '../data/services.js';

export default function ServiceCard({ service }) {
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I am interested in ${service.title}.`
  )}`;

  return (
    <article className="card">
      <div className="card__icon">{service.icon}</div>
      <span className="card__tag">{service.tag}</span>
      <h3>{service.title}</h3>
      <p className="card__tagline">{service.tagline}</p>
      <p className="card__desc">{service.description}</p>

      <ul className="card__features">
        {service.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <p className="card__for"><strong>Best for:</strong> {service.forWho}</p>

      <div className="card__price">
        <span className="card__amount">{service.price}</span>
        <span className="card__note">{service.priceNote}</span>
      </div>

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn--primary btn--block">
        Get started
      </a>
    </article>
  );
}
