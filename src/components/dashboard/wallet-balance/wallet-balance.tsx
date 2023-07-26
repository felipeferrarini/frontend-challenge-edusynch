'use client';

import { LegalScaleIcon } from '@/components/ui/icons';
import { useGetWalletBalance } from '@/services/wallet-service';
import { formatCurrency } from '@/utils/number-utils';

export const WalletBalance = (): JSX.Element => {
  const { data } = useGetWalletBalance();

  const balance = data ?? 0;

  return (
    <div className="shadow-dashboard inline-flex w-full rounded-lg">
      <div className="tablet:gap-4 deskop:py-6 desktop:pl-6 inline-flex w-[53%] items-center gap-2 py-2 pl-4">
        <div className="bg-primary-100 desktop:p-3 tablet:p-[9px] rounded-full p-[6px]">
          <LegalScaleIcon className="desktop:box-size-[40px] tablet:box-size-[30px] box-size-[20px]" />
        </div>
        <div className="tablet:flex hidden flex-col">
          <p className="desktop:heading-4 heading-5">Balance in US$</p>
          <p className="desktop:body label text-secondary-500">
            (approximately)
          </p>
        </div>
        <div className="tablet:hidden flex flex-col">
          <p className="label">Balance</p>
          <p className="label-small text-secondary-500">in US$</p>
        </div>
      </div>

      <div className="bg-primary-100 flex w-[47%] items-center justify-center rounded-r-lg">
        <p className="desktop:heading-3 tablet:heading-4 body font-bold">
          {formatCurrency(balance)}
        </p>
      </div>
    </div>
  );
};
