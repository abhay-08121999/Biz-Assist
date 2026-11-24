import { processSteps } from '../data/services.js';
import { Reveal } from './ui.jsx';

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal className="head"><h2>Live in about a week</h2><p>You talk to us twice. We do the rest.</p></Reveal>
        <Reveal className="timeline">
          {processSteps.map((s, i) => (
            <div className="step" key={s.title} style={{ '--i': i }}>
              <span className="step__n">{i + 1}</span>
              <h3>{s.title}</h3><p>{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}