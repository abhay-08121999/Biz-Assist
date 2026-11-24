import { useState } from 'react';
import { faqs } from '../data/services.js';
import { Reveal } from './ui.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container split split--faq">
        <Reveal variant="left"><h2>Questions owners ask us</h2><img className="float" src="/images/bot-support.png" alt="Support chatbot saying hello" /></Reveal>
        <div className="acc">
          {faqs.map(([q, a], k) => (
            <Reveal key={q} delay={k * 70} className={`acc__item ${open === k ? 'open' : ''}`}>
              <button aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>{q}<i /></button>
              <div className="acc__panel"><p>{a}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}