import { ICoinInfo } from '@/interfaces/coin-info';
import Image from 'next/image';

export const CoinName = ({ image, name, symbol }: ICoinInfo): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-4">
      <Image
        src={image}
        alt={name}
        width={32}
        height={32}
        className="rounded-full"
      />

      <p>
        {name}{' '}
        <span className="text-secondary-500">{symbol.toUpperCase()}</span>
      </p>
    </div>
  );
};
