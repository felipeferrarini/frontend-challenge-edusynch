'use client';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useRef } from 'react';
import { SignUpButton } from '../authentication';
import { HeaderSpacer } from '../header';
import { PresentationCarousel } from './presentation-carousel';

const chips = ['Cryptos', 'NFTs', 'Games'];

export const Presentation = (): JSX.Element => {
  const elementRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef);

  return (
    <section
      className="relative flex min-h-[150vh] flex-col items-center justify-end"
      ref={pageRef}
    >
      <div className="absolute top-0 min-h-[50vh] w-full" ref={elementRef} />
      <div
        className="top-0 flex min-h-[100vh] w-full flex-col items-center data-[visible=true]:fixed"
        data-visible={isVisible}
      >
        <HeaderSpacer />
        <div className="flex flex-1 px-3">
          <div className="grid-container desktop:gap-24 inline-flex flex-1 items-center gap-10">
            <div className="tablet:items-start tablet:text-start flex flex-1 flex-col items-center text-center">
              <h1 className="text-primary-500 heading-5 tablet:heading-3 desktop:heading-1 desktop:mb-6 tablet:mb-4 mb-2 font-bold">
                Lorem ipsum dolor sit amet, consectetur
              </h1>

              <p className="desktop:heading-5 desktop:mb-8 paragraph tablet:body mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>

              <SignUpButton className="btn btn-primary btn-small tablet:btn-large desktop:mb-20 mb-10 w-full max-w-[278px]">
                SIGN UP NOW <ArrowRightIcon />
              </SignUpButton>

              <div className="desktop:gap-8 inline-flex gap-6">
                {chips.map(chip => (
                  <div
                    key={`chip-${chip}`}
                    className="bg-primary-100 rounded px-4 py-1"
                  >
                    <p className="text-primary-500 desktop:heading-5 tablet:body label-small">
                      {chip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="tablet:flex hidden flex-1">
              <PresentationCarousel pageRef={pageRef} />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(/images/waves.svg)' }}
          className="tablet:h-[247px] h-[180px] w-full bg-cover bg-center bg-no-repeat"
        />
      </div>
    </section>
  );
};
