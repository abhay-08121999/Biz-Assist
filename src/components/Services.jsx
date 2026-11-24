import { services } from '../data/services.js';
import ServiceCard from './ServiceCard.jsx';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <h2>Our Services</h2>
          <p>Two focused services that help you respond faster and sell more.</p>
        </div>
        <div className="grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
