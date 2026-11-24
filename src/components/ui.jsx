import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

// variant: up | left | right | zoom | wipe
export function Reveal({ as: T = 'div', variant = 'up', delay = 0, className = '', children, ...p }) {
  const [ref, seen] = useInView();
  return (
    <T ref={ref} className={`rv rv--${variant} ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...p}>
      {children}
    </T>
  );
}

export function Counter({ to, prefix = '', suffix = '' }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, to]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}