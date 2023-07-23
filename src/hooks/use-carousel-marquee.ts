'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';

export const useCarouselMarquee = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: true
  });
  const requestAnimationId = useRef(0);

  const animate = useCallback(() => {
    if (!embla || !requestAnimationId.current) return;

    const engine = embla.internalEngine();
    engine.location.add(-1);
    engine.target.set(engine.location);
    engine.scrollLooper.loop(-1);
    engine.slideLooper.loop();
    engine.translate.to(engine.location);
    requestAnimationId.current = requestAnimationFrame(animate);
  }, [embla]);

  const startAutoScroll = useCallback(() => {
    requestAnimationId.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAutoScroll = useCallback(() => {
    cancelAnimationFrame(requestAnimationId.current);
    requestAnimationId.current = 0;
  }, []);

  useEffect(() => {
    if (!embla) return;

    embla.on('pointerDown', stopAutoScroll);
    embla.on('settle', startAutoScroll);

    startAutoScroll();
    return () => stopAutoScroll();
  }, [embla, startAutoScroll, stopAutoScroll]);

  return { viewportRef };
};
