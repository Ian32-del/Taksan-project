import { useEffect, useRef, useState } from "react";

export function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-brand">
        {n.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
