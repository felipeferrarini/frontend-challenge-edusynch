import { roboto } from '@/theme/fonts';
import '@/theme/globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'CoinSynch - Sua cateira de criptomoedas'
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
