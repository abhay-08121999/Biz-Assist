import { processSteps } from '../data/services.js';

export default function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <div className="section__head">
          <h2>How it works</h2>
          <p>From first call to live system in about a week.</p>
        </div>
        <ol className="steps">
          {processSteps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__num">{i + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
