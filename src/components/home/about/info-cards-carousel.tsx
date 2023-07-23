'use client';

import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  slides: React.ReactNode[];
};

export const InfoCardsCarousel = ({ slides }: Props) => {
  const [viewportRef] = useEmblaCarousel({
    loop: false,
    align: 'start'
  });

  return (
    <div className="overflow-hidden py-10 pt-2" ref={viewportRef}>
      <div className="relative ml-[calc(600px-16px)] flex touch-pan-y select-none">
        {slides.map((slide, index) => (
          <div
            className="relative ml-4 w-max"
            key={`carousel-info-card-${index}`}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
