import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

function CounterItem({ targetValue, suffix, label, sub, hasTriggered }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTime = null;
    const duration = 2000; // 2 seconds animation
    const isDecimal = !Number.isInteger(targetValue);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = easeOut * targetValue;

      if (isDecimal) {
        setCurrentValue(parseFloat(val.toFixed(1)));
      } else {
        setCurrentValue(Math.floor(val));
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasTriggered, targetValue]);

  return (
    <div className="flex flex-col items-center text-center p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-transform hover:-translate-y-1.5 duration-300 relative group">
      {/* Number Display with CountUp */}
      <div className="flex items-baseline justify-center gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
        <span
          className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          {currentValue.toLocaleString()}
        </span>
        {suffix && (
          <span
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
            style={{ color: 'var(--color-accent)' }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Main Label */}
      <h3
        className="text-xs sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1 tracking-tight leading-snug"
        style={{ color: 'var(--color-text)' }}
      >
        {label}
      </h3>

      {/* Subtitle description */}
      {sub && (
        <p
          className="text-[11px] sm:text-xs md:text-sm font-medium leading-tight"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Stats({ data }) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);
  const { badge, title, items } = data.stats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-10 sm:py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
      }}
    >
      {/* Decorative background shape */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        {title && (
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <h2
              className="font-heading text-xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {title}
            </h2>
          </div>
        )}

        {/* Horizontal Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-slate-800">
          {items.map((stat, idx) => (
            <CounterItem
              key={idx}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sub={stat.sub}
              hasTriggered={hasTriggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

