'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollFadeTextProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  startDelay?: number;
}

export function useScrollFadeText({ sectionRef, startDelay = 2000 }: UseScrollFadeTextProps) {
  const [showText, setShowText] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Initial fade in after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  // Scroll-based fade out
  useEffect(() => {
    if (!showText) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Fade starts when hero center reaches viewport center
        // Fade completes when hero top reaches top of viewport
        const fadeStart = viewportHeight / 2;
        const fadeEnd = -viewportHeight / 2;
        const distanceToFade = rect.top - fadeStart;
        const totalFadeDistance = fadeEnd - fadeStart;

        let opacity = 1 - distanceToFade / totalFadeDistance;
        opacity = Math.max(0, Math.min(1, opacity));

        setTextOpacity(opacity);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [showText, sectionRef]);

  return { showText, textOpacity };
}
