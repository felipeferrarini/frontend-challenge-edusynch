'use client';

import { Table } from '@/components/ui/data-display';
import { useGetTrendingCoins } from '@/services/coin-service';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useCallback, useState } from 'react';
import { HeaderSpacer } from '../header';
import { columns, getRows } from './constants';
import { MobileAccordion } from './mobile-accordion';

export const TopCryptos = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const { data = [] } = useGetTrendingCoins();

  const slicedData = showMore ? data : data.slice(0, 5);

  const toggleViewMore = useCallback(() => {
    setShowMore(prev => !prev);
  }, []);

  return (
    <section
      id="top-cryptos"
      className="desktop:py-[120px] tablet:py-[80px] flex flex-col items-center justify-center px-3 py-[56px]"
    >
      <HeaderSpacer />
      <div className="grid-container desktop:gap-10 tablet:gap-8 flex flex-col items-center gap-4">
        <h3 className="desktop:heading-3 tablet:heading-4 heading-5 font-bold">
          Top Cryptos
        </h3>

        <div className="tablet:block hidden w-full">
          <Table columns={columns} rows={getRows(slicedData)} />
        </div>

        <div className="tablet:hidden w-full">
          <MobileAccordion data={slicedData} />
        </div>

        <button
          className="text-primary-500 body inline-flex items-center gap-2"
          onClick={toggleViewMore}
        >
          {showMore ? 'View Less' : 'View More'}
          {showMore ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
    </section>
  );
};
