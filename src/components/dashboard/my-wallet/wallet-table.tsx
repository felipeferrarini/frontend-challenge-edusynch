import { ChangePercentage } from '@/components/ui/common';
import { ITableColumn, Table } from '@/components/ui/data-display';
import { ConversionIcon } from '@/components/ui/icons';
import { IWalletInfo } from '@/interfaces/wallet-info';
import { formatCurrency } from '@/utils/number-utils';
import Image from 'next/image';
import { useTransferModal } from './store';

type Props = {
  data: IWalletInfo[];
};

export const columns: ITableColumn[] = [
  { label: '#', className: 'w-[10%]' },
  { label: 'Crypto', className: 'w-[25%]' },
  { label: 'Holdings', className: 'w-[25%]' },
  { label: 'Change', className: 'w-[25%]' },
  { label: 'Trade', className: 'w-[5%]' }
];

export const WalletTable = ({ data }: Props) => {
  const { onOpen } = useTransferModal();

  return (
    <Table
      columns={columns}
      rows={data
        .sort((a, b) => b.totalPrice - a.totalPrice)
        .map((coin, index) => ({
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
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />

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
              key: 'holdings',
              value: (
                <div className="flex flex-col gap-1">
                  <p className="label">{formatCurrency(coin.totalPrice)}</p>
                  <p className="label-small text-primary-500">
                    {coin.quantity} {coin.symbol.toUpperCase()}
                  </p>
                </div>
              )
            },
            {
              key: 'change',
              value: (
                <ChangePercentage
                  className="body"
                  value={coin.percentageChanged24h}
                />
              )
            },
            {
              key: 'trade',
              value: (
                <div
                  className="tooltip tooltip-bottom tooltip-primary"
                  data-tip="Transfer Crypto"
                >
                  <button
                    className="btn btn-ghost group p-1"
                    aria-label="Transfer Crypto"
                    onClick={() => onOpen(coin)}
                  >
                    <ConversionIcon className="group-hover:stroke-primary-500 transition-all" />
                  </button>
                </div>
              )
            }
          ]
        }))}
    />
  );
};
