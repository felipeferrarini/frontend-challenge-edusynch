'use client';

import { Logo } from '@/components/ui/common';
import { homeLinks } from '@/config/constants';
import Link from 'next/link';
import { SignInButton, SignUpButton } from '../authentication';
import { CoinMarquee } from './coin-marquee';
import { MobileNavigation } from './mobile-navigation';

export const HomeHeader = (): JSX.Element => {
  return (
    <header className="shadow-header fixed z-10 flex w-full flex-col items-center bg-white px-4 transition-shadow duration-300">
      <div className="grid-container desktop:h-16 tablet:h-[60px] inline-flex h-14 items-center justify-between">
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
            <CoinMarquee />
          </div>

          <div className="tablet:inline-flex hidden items-center gap-6">
            <SignInButton />
            <SignUpButton />
          </div>

          <div className="tablet:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>

      <div className="bg-secondary-200 desktop:hidden h-[1px] w-full" />

      <div
        aria-hidden
        className="desktop:hidden tablet:max-w-[360px] mx-auto max-w-full"
      >
        <CoinMarquee />
      </div>
    </header>
  );
};

export const HeaderSpacer = (): JSX.Element => {
  return <div className="desktop:h-16 h-[85px]" />;
};
