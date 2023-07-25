import { PropsWithChildren } from 'react';
import { DashboardHeader } from './header';

export const DashboardLayout = ({
  children
}: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
};
