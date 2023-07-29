import { numberWithinRange } from '@/utils/number-utils';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export const useCarouselOpacity = (initialValues: number[]) => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start'
  });

  const [tweenValues, setTweenValues] = useState<number[]>(initialValues);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map(scrollSnap => {
      let diffToTarget = scrollSnap - scrollProgress;

      const tweenValue = 1 - Math.abs(diffToTarget);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => {
      onScroll();
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return {
    viewportRef,
    tweenValues,
    emblaApi
  };
};
