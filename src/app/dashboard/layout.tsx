import { DashboardLayout } from '@/components/dashboard/layout';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'CoinSynch - Sua cateira de criptomoedas'
};

export default function Layout({ children }: PropsWithChildren) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
