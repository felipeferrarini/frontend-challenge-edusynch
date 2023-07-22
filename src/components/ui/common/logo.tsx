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
