import { useEffect, useRef, useState } from 'react';
import { chat } from '../data/services.js';
import { useInView } from './ui.jsx';

export default function ChatDemo() {
  const [ref, seen] = useInView(0.3);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setCount(chat.messages.length); return; }
    let dead = false;
    const timers = [];
    const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)));
    (async () => {
      while (!dead) {
        setCount(0);
        await wait(700);
        for (let i = 0; i < chat.messages.length; i++) {
          const bot = chat.messages[i].from === 'bot';
          if (bot) setTyping(true);
          await wait(bot ? 1200 : 900);
          if (dead) return;
          setTyping(false);
          setCount(i + 1);
        }
        await wait(4000);
      }
    })();
    return () => { dead = true; timers.forEach(clearTimeout); };
  }, [seen]);

  useEffect(() => {
    box.current?.scrollTo({ top: box.current.scrollHeight, behavior: 'smooth' });
  }, [count, typing]);

  return (
    <div className="phone" ref={ref} aria-label="Example chatbot conversation">
      <div className="phone__head">
        <span className="phone__avatar">🦷</span>
        <div><strong>{chat.name}</strong><small>online, replies instantly</small></div>
      </div>
      <div className="phone__body" ref={box}>
        {chat.messages.slice(0, count).map((m, i) => (
          <p key={i} className={`msg msg--${m.from}`}>{m.text}</p>
        ))}
        {typing && <p className="msg msg--bot typing"><i /><i /><i /></p>}
      </div>
    </div>
  );
}