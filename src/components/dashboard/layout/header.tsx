import { Logo } from '@/components/ui/common';
import { MobileNavigation } from './mobile-navigation';
import { ProfileMenu } from './profile-menu';

export const DashboardHeader = (): JSX.Element => {
  return (
    <header className="desktop:h-16 tablet:h-[60px] relative flex h-14 items-center justify-center bg-white px-3 shadow-[0px_4px_8px_0px_rgba(77,77,77,0.10)]">
      <div className="desktop:max-w-full desktop:px-10 grid-container inline-flex items-center justify-between px-0">
        <div className="desktop:hidden">
          <MobileNavigation />
        </div>

        <Logo />

        <ProfileMenu />
      </div>
    </header>
  );
};
