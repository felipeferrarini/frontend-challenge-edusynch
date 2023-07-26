'use client';

import { CryptoWalletIcon } from '@/components/ui/icons';
import { AddCryptoModal } from './add-crypto-modal';
import { EmptyState } from './empty-state';

export const MyWallet = (): JSX.Element => {
  return (
    <div className="shadow-dashboard flex min-h-[389px] flex-col rounded-lg bg-white p-6">
      <div className="inline-flex w-full items-center justify-between">
        <div className="inline-flex items-center gap-4">
          <CryptoWalletIcon className="box-size-[32px]" />
          <h4 className="heading-4 font-bold">My Wallet</h4>
        </div>

        <AddCryptoModal />
      </div>

      <div className="bg-secondary-200 -mx-6 my-6 h-px w-[calc(100%+48px)]" />

      <EmptyState />
    </div>
  );
};
