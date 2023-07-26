'use client';

import { ChangePercentage } from '@/components/ui/common';
import { useGetCoinVariation } from '@/services/coin-service';
import Image from 'next/image';
import { ChartVariation } from './chart-variation';

const coinId = 'ethereum';

export const DailyVariation = (): JSX.Element => {
  const { data } = useGetCoinVariation(coinId);
  const { info, variation = [] } = data || {};

  return (
    <div className="shadow-dashboard inline-flex w-full rounded-lg bg-white">
      <div className="flex w-[34%] flex-col p-2">
        <p className="label-small text-secondary-500 mb-4">Daily Variation</p>

        <div className="mb-2 inline-flex items-center gap-2">
          <Image src={info?.image || ''} width={24} height={24} alt={coinId} />
          <p className="label">{info?.symbol}</p>
        </div>

        <ChangePercentage
          className="body"
          value={info?.percentageChanged24h || 0}
        />
      </div>

      <div className="border-l-secondary-100 w-[66%] border-l">
        <ChartVariation data={variation} />
      </div>
    </div>
  );
};
