import Image from 'next/image';

export const Logo = (): JSX.Element => {
  return (
    <div className="tablet:max-w-[124px] max-w-[94px]">
      <Image
        src="/images/logo.svg"
        alt="CoinSynch"
        width={124}
        height={21}
        priority
      />
    </div>
  );
};

export const TextLogo = (): JSX.Element => {
  return (
    <span className="text-primary-500 font-bold">
      Coin<span className="text-secondary-500">Synch</span>
    </span>
  );
};
