import { Logo } from '../ui/common';

export const HomeFooter = (): JSX.Element => {
  return (
    <footer className="desktop:h-16 flex h-14 w-full items-center justify-center px-3">
      <div className="grid-container tablet:justify-between inline-flex items-center justify-center">
        <p className="label tablet:block hidden">
          Copyright © {new Date().getFullYear()} - All Rights Reserved
        </p>
        <Logo />
      </div>
    </footer>
  );
};
