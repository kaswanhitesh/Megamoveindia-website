'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface UseGalleryScrollProps {
  containerRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  imageCount: number;
  imageWidth: number;
  imageGap: number;
  sidePadding: number;
}

interface ScrollState {
  progress: number;
  translateX: number;
  isActive: boolean;
}

export function useGalleryScroll({
  containerRef,
  trackRef,
  imageCount,
  imageWidth,
  imageGap,
  sidePadding,
}: UseGalleryScrollProps): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    translateX: 0,
    isActive: false,
  });

  const rafRef = useRef<number | null>(null);
  const prevProgressRef = useRef(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    
    if (!container || !track) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isGalleryInView = rect.top < viewportHeight && rect.bottom > 0;

      if (!isGalleryInView) {
        setScrollState(prev => ({ ...prev, isActive: false }));
        return;
      }

      const distanceFromBottom = Math.max(0, viewportHeight - rect.top);
      const totalDistance = viewportHeight + rect.height;
      let progress = distanceFromBottom / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const totalImagesWidth = imageCount * imageWidth + (imageCount - 1) * imageGap;
      const trackWidth = sidePadding * 2 + totalImagesWidth;
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
      const maxScroll = Math.max(0, trackWidth - viewportWidth);
      const translateX = progress * maxScroll;

      if (track) {
        track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
      }

      if (Math.abs(progress - prevProgressRef.current) > 0.005) {
        prevProgressRef.current = progress;
        setScrollState({
          progress,
          translateX,
          isActive: progress < 0.99,
        });
      }
    });
  }, [containerRef, trackRef, imageCount, imageWidth, imageGap, sidePadding]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return scrollState;
}
