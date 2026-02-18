"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type LeafScrollFollowerProps = {
  anchorId: string;
  leafSrc: StaticImageData;
  sizePx?: number;
};

type Point = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function randFromSeed(seed: number) {
  // Simple deterministic PRNG (0..1)
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function LeafScrollFollower({
  anchorId,
  leafSrc,
  sizePx = 96,
}: LeafScrollFollowerProps) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const scaleRef = useRef<HTMLDivElement | null>(null);

  const lastAnchorCenterRef = useRef<Point | null>(null);
  const anchorInViewRef = useRef(true);
  const seedScrollYRef = useRef(0);
  const fallYRef = useRef(-9999);
  const rafRef = useRef<number | null>(null);
  const cycleRef = useRef(0);
  const xJitterRef = useRef(0);
  const baseScaleRef = useRef(1);
  const scaleWobbleRef = useRef(0.06);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const anchor = document.getElementById(anchorId);
    if (!anchor) return;

    const computeAnchorCenter = () => {
      const r = anchor.getBoundingClientRect();
      lastAnchorCenterRef.current = {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
      };
    };

    computeAnchorCenter();

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        anchorInViewRef.current = entry.isIntersecting;
        computeAnchorCenter();

        if (entry.isIntersecting) {
          // When the CTA is in view, hide the floating follower.
          setVisible(false);
          return;
        }

        // "Plucked" start: begin from the CTA's last on-screen position,
        // then fall with scroll (centered).
        const from = lastAnchorCenterRef.current;
        if (!from) return;

        seedScrollYRef.current = window.scrollY || 0;
        fallYRef.current = from.y - sizePx / 2;

        cycleRef.current += 1;
        const r1 = randFromSeed(seedScrollYRef.current + cycleRef.current * 11.7);
        const r2 = randFromSeed(seedScrollYRef.current + cycleRef.current * 23.9);
        const r3 = randFromSeed(seedScrollYRef.current + cycleRef.current * 37.3);
        xJitterRef.current = (r1 - 0.5) * 260; // +/- 130px around center
        baseScaleRef.current = 0.9 + r2 * 0.35; // 0.9 .. 1.25
        scaleWobbleRef.current = 0.04 + r3 * 0.05; // 0.04 .. 0.09

        setVisible(true);

        if (reduced) {
          // For reduced motion users, keep it hidden rather than animating.
          setVisible(false);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -20% 0px" }
    );

    obs.observe(anchor);

    const updateTransform = () => {
      rafRef.current = null;
      const el = rootRef.current;
      const scaler = scaleRef.current;
      if (!el || !scaler || !visible || anchorInViewRef.current) return;

      const scrollY = window.scrollY || 0;
      const vh = window.innerHeight || 0;
      const vw = window.innerWidth || 0;

      // Fall speed tied to scroll distance (so it "falls with us").
      const dy = (scrollY - seedScrollYRef.current) * 0.55; // tune: 0.4..0.8
      let y = fallYRef.current + dy;

      // Loop: once past bottom, wrap to above top and reset seed.
      const wrapAt = vh + sizePx + 32;
      if (y > wrapAt) {
        seedScrollYRef.current = scrollY;
        fallYRef.current = -sizePx - 24;
        y = fallYRef.current;

        cycleRef.current += 1;
        const r1 = randFromSeed(seedScrollYRef.current + cycleRef.current * 11.7);
        const r2 = randFromSeed(seedScrollYRef.current + cycleRef.current * 23.9);
        const r3 = randFromSeed(seedScrollYRef.current + cycleRef.current * 37.3);
        xJitterRef.current = (r1 - 0.5) * 260;
        baseScaleRef.current = 0.85 + r2 * 0.4; // 0.85 .. 1.25
        scaleWobbleRef.current = 0.04 + r3 * 0.05;
      }

      // Centered falling leaf with gentle drift.
      const centerX = vw * 0.5 - sizePx / 2;
      const drift = Math.sin(scrollY / 180) * 40;
      const x = clamp(centerX + xJitterRef.current + drift, 12, vw - sizePx - 12);

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // Vary size to feel more realistic (perspective + wobble).
      const t = clamp((y + sizePx) / (vh + sizePx * 2), 0, 1); // 0..1 through viewport
      const perspective = 1.18 - t * 0.38; // bigger near top, smaller near bottom
      const wobble = 1 + Math.sin(scrollY / 160) * scaleWobbleRef.current;
      const scale = baseScaleRef.current * perspective * wobble;
      scaler.style.transform = `scale(${scale.toFixed(3)})`;
    };

    const requestUpdate = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(updateTransform);
    };

    const onScroll = () => {
      if (!visible) return;
      requestUpdate();
    };

    const onResize = () => {
      if (!visible) return;
      requestUpdate();
    };

    // Kick once on activation.
    requestUpdate();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorId, enabled, sizePx, visible]);

  if (!enabled || !visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed left-0 top-0 pointer-events-none opacity-60"
      style={{
        zIndex: 0,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <div ref={scaleRef} style={{ willChange: "transform" }}>
        <div className="animate-[leaf-cta_2.6s_ease-in-out_infinite]">
          <Image
            src={leafSrc}
            alt=""
            width={sizePx}
            height={sizePx}
            className="rotate-90"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}

