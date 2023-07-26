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
    <div className="shadow-dashboard tablet:flex-row tablet:max-h-[112px] flex max-h-[142px] w-full flex-col rounded-lg bg-white">
      <div className="tablet:w-[34%] flex w-full flex-col p-2">
        <p className="label-small text-secondary-500 mb-4">Daily Variation</p>

        <div className="tablet:flex-col tablet:gap-2 flex flex-row items-center gap-4">
          <div className="inline-flex items-center gap-2">
            {info && (
              <Image
                src={info?.image || ''}
                width={24}
                height={24}
                alt={coinId}
                className="box-size-[16px] tablet:box-size-[24px]"
              />
            )}
            <p className="tablet:label label-small">{info?.symbol}</p>
          </div>

          <ChangePercentage
            className="tablet:body label"
            value={info?.percentageChanged24h || 0}
          />
        </div>
      </div>

      <div className="border-l-secondary-100 tablet:w-[66%] tablet:max-h-full max-h-[80px] w-full border-l">
        <ChartVariation data={variation} />
      </div>
    </div>
  );
};
