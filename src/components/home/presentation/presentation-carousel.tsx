'use client';

import { numberWithinRange } from '@/utils/number-utils';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const images = [
  '/images/home-carousel/carousel-1.png',
  '/images/home-carousel/carousel-2.png',
  '/images/home-carousel/carousel-3.png'
];

export const PresentationCarousel = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start'
  });

  const [tweenValues, setTweenValues] = useState<number[]>([1, 0.4, 0]);

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

  return (
    <div className="relative w-full">
      <div
        className="absolute left-0 top-0 w-[200%] -translate-y-1/2 overflow-hidden"
        ref={viewportRef}
      >
        <div className="relative flex flex-[0_0_100%] touch-pan-y select-none">
          {images.map((image, index) => (
            <div
              className="relative flex-[0_0_50%]"
              key={`home-carousel-item-${image}`}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] })
              }}
            >
              <Image
                src={image}
                alt="coin"
                width={496}
                height={499}
                className="desktop:h-[500px] h-[280px] w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
