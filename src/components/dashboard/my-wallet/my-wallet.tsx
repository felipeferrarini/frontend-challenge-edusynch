'use client';

import { CryptoWalletIcon } from '@/components/ui/icons';
import { useGetWallet } from '@/services/wallet-service';
import { AddCryptoModal } from './add-crypto-modal';
import { EmptyState } from './empty-state';
import { MyWalletItem } from './my-wallet-item';
import { TransferModal } from './transfer-modal';
import { WalletTable } from './wallet-table';

export const MyWallet = (): JSX.Element => {
  const { data = [] } = useGetWallet();

  return (
    <div className="tablet:shadow-dashboard tablet:bg-white flex min-h-[389px] flex-col rounded-lg">
      <div className="tablet:hidden bg-secondary-300 mt-6 h-px w-full" />
      <div className="border-b-secondary-200 tablet:border-b inline-flex w-full items-center justify-between p-6">
        <div className="inline-flex items-center gap-4">
          <CryptoWalletIcon className="box-size-[32px]" />
          <h4 className="heading-4 font-bold">My Wallet</h4>
        </div>

        <AddCryptoModal />
      </div>

      {!data.length && <EmptyState />}

      {!!data.length && (
        <>
          <div className="tablet:block hidden pt-6">
            <WalletTable data={data} />
          </div>
          <div className="tablet:hidden grid-system">
            {data.map(item => (
              <MyWalletItem key={`my-wallet-item-${item.id}`} data={item} />
            ))}
          </div>
        </>
      )}

      <TransferModal />
    </div>
  );
};
