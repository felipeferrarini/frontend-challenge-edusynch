'use client';

import { useCarouselOpacity } from '@/hooks/use-carousel-opacity';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useElementScrollProgress } from '@/hooks/use-scroll-progress';
import { getIndexByPercentage } from '@/utils/array-utils';
import Image from 'next/image';
import { ComponentRef, useCallback, useEffect, useRef } from 'react';

const images = [
  '/images/home-carousel/carousel-1.png',
  '/images/home-carousel/carousel-2.png',
  '/images/home-carousel/carousel-3.png'
];

type Props = {
  pageRef: React.RefObject<HTMLDivElement>;
};

export const PresentationCarousel = ({ pageRef }: Props) => {
  const { emblaApi, tweenValues, viewportRef } = useCarouselOpacity([
    1, 0.4, 0, 0, 0, 0
  ]);
  const carouselRef = useRef<ComponentRef<'div'>>(null);
  const isVisible = useIntersectionObserver(carouselRef);
  const scrollProgress = useElementScrollProgress(pageRef);

  const handleScroll = useCallback(() => {
    if (isVisible) {
      const nextIndex = getIndexByPercentage(images, scrollProgress);

      emblaApi?.scrollTo(nextIndex);
    }
  }, [emblaApi, isVisible, scrollProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="relative w-full" ref={carouselRef}>
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
