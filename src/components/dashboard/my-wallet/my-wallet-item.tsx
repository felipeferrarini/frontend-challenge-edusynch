import { ChangePercentage } from '@/components/ui/common';
import { IWalletInfo } from '@/interfaces/wallet-info';
import { formatCurrency } from '@/utils/number-utils';
import Image from 'next/image';
import { useTransferModal } from './store';

type Props = {
  data: IWalletInfo;
};

export const MyWalletItem = ({ data }: Props) => {
  const { name, symbol, image, totalPrice, quantity, percentageChanged24h } =
    data;
  const { onOpen } = useTransferModal();

  return (
    <div className="shadow-dashboard col-span-2 flex flex-col rounded-md bg-white">
      <div className="bg-primary-100 inline-flex items-center justify-center gap-2 rounded-t-md p-4">
        <Image src={image} alt={name} height={16} width={16} />
        <p className="label-small whitespace-nowrap">
          {name}{' '}
          <span className="text-secondary-500">{symbol.toUpperCase()}</span>
        </p>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex flex-col gap-1">
          <p className="text-secondary-500 label-small">Holdings</p>
          <p className="label">{formatCurrency(totalPrice)}</p>
          <p className="text-primary-500 label-small">
            {quantity} {symbol.toUpperCase()}
          </p>
        </div>

        <div className="bg-secondary-200 my-4 h-px w-full" />

        <div className="mb-4 flex flex-col gap-1">
          <p className="text-secondary-500 label-small">Change</p>
          <ChangePercentage className="label" value={percentageChanged24h} />
        </div>

        <button
          className="btn btn-primary btn-small"
          onClick={() => onOpen(data)}
        >
          Trade
        </button>
      </div>
    </div>
  );
};
