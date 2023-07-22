'use client';

import { Logo } from '@/components/ui/common';
import { homeLinks } from '@/config/constants';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import cx from 'classnames';
import Link from 'next/link';
import { MobileNavigation } from './mobile-navigation';
import { QuotationMarquee } from './quotation-marquee';

export const HomeHeader = (): JSX.Element => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={cx({
        'fixed z-10 flex w-full flex-col items-center bg-white transition-shadow duration-300':
          true,
        'shadow-header': scrollPosition > 0
      })}
    >
      <div className="grid-system">
        <div className="grid-column-[12] inline-flex h-16 items-center justify-between px-4">
          <div className="inline-flex items-center gap-10">
            <Link href="/">
              <Logo />
            </Link>

            <div className="tablet:inline-flex hidden gap-6">
              {homeLinks.map(({ href, name }) => (
                <a key={`home-link-item-${href}`} className="link" href={href}>
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-20">
            <div className="desktop:block hidden max-w-[360px]">
              <QuotationMarquee />
            </div>

            <div className="tablet:inline-flex hidden items-center gap-6">
              <button className="btn-link">Sign in</button>
              <button className="btn-primary">Sign up</button>
            </div>

            <div className="tablet:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-200 desktop:hidden h-[1px] w-full" />

      <div
        aria-hidden
        className="desktop:hidden tablet:max-w-[360px] mx-auto max-w-full"
      >
        <QuotationMarquee />
      </div>
    </header>
  );
};
