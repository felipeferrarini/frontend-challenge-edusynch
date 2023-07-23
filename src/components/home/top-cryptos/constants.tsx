import { ChangePercentage } from '@/components/ui/common';
import { ITableColumn, ITableRow } from '@/components/ui/data-display';
import { ICoinInfo } from '@/interfaces/coin-info';
import { formatCurrency } from '@/utils/number-utils';
import Image from 'next/image';

export const columns: ITableColumn[] = [
  { label: '#', className: 'w-[10%]' },
  { label: 'Crypto', className: 'w-[25%]' },
  { label: 'Price', className: 'w-[25%]' },
  { label: 'Change', className: 'w-[25%]' },
  { label: 'Trade', className: 'w-[5%]' }
];

export const getRows = (data: ICoinInfo[]): ITableRow[] =>
  data.map((coin, index) => ({
    cells: [
      {
        key: 'index',
        value: (
          <span className="label text-secondary-500 pl-6">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        )
      },
      {
        key: 'name',
        value: (
          <div className="inline-flex items-center gap-4">
            <Image src={coin.image} alt={coin.name} width={32} height={32} />

            <p>
              {coin.name}{' '}
              <span className="text-secondary-500">
                {coin.symbol.toUpperCase()}
              </span>
            </p>
          </div>
        )
      },
      {
        key: 'price',
        value: formatCurrency(coin.currentPrice)
      },
      {
        key: 'change',
        value: <ChangePercentage value={coin.percentageChanged24h} />
      },
      {
        key: 'trade',
        value: (
          <button className="btn btn-small btn-success w-full max-w-[80px]">
            Buy
          </button>
        )
      }
    ]
  }));
