import { useEffect, useState } from 'react';
import { reviews } from '../data/services.js';
import { Reveal } from './ui.jsx';

export default function Reviews() {
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold) return;
    const t = setTimeout(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearTimeout(t);
  }, [i, hold]);
  const r = reviews[i];
  return (
    <section className="section section--mist" id="reviews">
      <div className="container">
        <Reveal className="head"><h2>Owners who stopped missing messages</h2></Reveal>
        <Reveal className="rev" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
          <div className="rev__tabs" role="tablist">
            {reviews.map((x, k) => (
              <button key={x.name} role="tab" aria-selected={k === i} className={k === i ? 'on' : ''} onClick={() => setI(k)}>
                <b>{x.name}</b><small>{x.role}</small>
                {k === i && !hold && <em key={i} />}
              </button>
            ))}
          </div>
          <figure className="rev__card" key={i}>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>{r.text}</blockquote>
            <figcaption><span className="avatar">{r.name.split(' ').pop()[0]}</span>{r.name}, {r.role}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}