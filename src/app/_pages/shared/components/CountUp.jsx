"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Animated counter — counts from 0 to the number embedded in `value`,
 * preserving any prefix/suffix (e.g. "100+", "15+ Years").
 * Non-numeric values (e.g. "Pan India") render statically.
 * Starts when scrolled into view, runs once.
 */
export default function CountUp({
  value,
  duration = 1600,
  className = "",
}) {
  const ref = useRef(null);
  const startedRef = useRef(false);

  const parsed = useMemo(() => {
    const match = String(value).match(/^(.*?)(\d[\d,]*)(.*)$/);
    if (!match) return null;
    const target = parseInt(match[2].replace(/,/g, ""), 10);
    if (!Number.isFinite(target)) return null;
    return { prefix: match[1], target, suffix: match[3] };
  }, [value]);

  const [display, setDisplay] = useState(() =>
    parsed ? "0" : String(value)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed || startedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(parsed.target * eased);
          setDisplay(`${parsed.prefix}${current.toLocaleString("en-IN")}${parsed.suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
