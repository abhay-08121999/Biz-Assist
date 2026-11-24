import { points, stats } from '../data/services.js';
import { Reveal, Counter } from './ui.jsx';

export function Showcase() {
  return (
    <section className="section section--mist">
      <div className="container split">
        <div className="collage">
          <Reveal variant="wipe" className="collage__main"><img src="/images/office-glass.jpg" alt="Busy modern office seen through glass" /></Reveal>
          <Reveal variant="wipe" delay={300} className="collage__side"><img src="/images/dashboard.jpg" alt="Dashboard with chat analytics on a monitor" /></Reveal>
          <span className="chip chip--c">42 chats today</span>
          <span className="chip chip--d">9 bookings</span>
        </div>
        <div>
          <Reveal><h2>Sounds like your team. Works while they sleep.</h2></Reveal>
          <ul className="points">
            {points.map(([t, d], i) => (
              <Reveal as="li" variant="right" delay={i * 120} key={t}><strong>{t}</strong><span>{d}</span></Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <strong><Counter to={s.to} prefix={s.prefix} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}