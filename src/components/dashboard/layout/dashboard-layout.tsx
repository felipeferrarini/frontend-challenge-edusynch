import { PropsWithChildren } from 'react';
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
        {children}
      </div>
    </div>
  );
};
