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
}: UseGalleryScrollProps) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    translateX: 0,
    isActive: false,
  });

  const rafRef = useRef<number | null>(null);
  const prevProgressRef = useRef(0);

  // Calculate max horizontal scroll needed
  const calculateMaxScroll = useCallback(() => {
    if (!trackRef.current) return 0;
    const totalImagesWidth = imageCount * imageWidth + (imageCount - 1) * imageGap;
    const trackWidth = sidePadding * 2 + totalImagesWidth;
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    return Math.max(0, trackWidth - viewportWidth);
  }, [imageCount, imageWidth, imageGap, sidePadding]);

  const maxScroll = calculateMaxScroll();

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current!;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate if gallery is in viewport
      const isGalleryInView = rect.top < viewportHeight && rect.bottom > 0;

      if (!isGalleryInView) {
        setScrollState(prev => ({
          ...prev,
          isActive: false,
        }));
        return;
      }

      // Progress: 0 when container enters bottom, 1 when exits top
      const distanceFromBottom = Math.max(0, viewportHeight - rect.top);
      const totalDistance = viewportHeight + rect.height;
      let progress = distanceFromBottom / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Calculate horizontal translation
      const translateX = progress * maxScroll;

      // Update track transform
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;
      }

      // Only update state if progress changed significantly
      if (Math.abs(progress - prevProgressRef.current) > 0.005) {
        prevProgressRef.current = progress;
        setScrollState({
          progress,
          translateX,
          isActive: progress < 0.99,
        });
      }
    });
  }, [containerRef, trackRef, maxScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return scrollState;
}
