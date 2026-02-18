"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * If true, animation runs once and stays visible after entering viewport.
   */
  once?: boolean;
  /**
   * IntersectionObserver threshold.
   */
  threshold?: number;
  /**
   * IntersectionObserver rootMargin, e.g. "0px 0px -10% 0px".
   */
  rootMargin?: string;
};

export default function Reveal({
  children,
  className = "",
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, show immediately.
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

