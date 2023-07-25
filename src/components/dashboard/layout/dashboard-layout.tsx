import { PropsWithChildren } from 'react';
import { DashboardFooter } from './footer';
import { DashboardHeader } from './header';
import { Sidebar } from './sidebar';

export const DashboardLayout = ({
  children
}: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />

      <div className="flex flex-1 flex-row items-stretch bg-[#F9F9F9]">
        <Sidebar />
        <div className="desktop:px-20 desktop:py-14 tablet:px-12 tablet:py-10 flex flex-1 p-6">
          {children}
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};
