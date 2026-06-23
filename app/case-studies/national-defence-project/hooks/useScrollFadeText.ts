'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollFadeTextProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  startDelay?: number;
}

interface FadeState {
  showText: boolean;
  textOpacity: number;
}

export function useScrollFadeText({ sectionRef, startDelay = 2000 }: UseScrollFadeTextProps): FadeState {
  const [state, setState] = useState<FadeState>({
    showText: false,
    textOpacity: 0,
  });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setState(prev => ({ ...prev, showText: true })), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!state.showText) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const fadeStart = viewportHeight / 2;
        const fadeEnd = -viewportHeight / 2;
        const distanceToFade = rect.top - fadeStart;
        const totalFadeDistance = fadeEnd - fadeStart;

        let opacity = 1 - distanceToFade / totalFadeDistance;
        opacity = Math.max(0, Math.min(1, opacity));

        setState(prev => ({ ...prev, textOpacity: opacity }));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state.showText, sectionRef]);

  return state;
}
