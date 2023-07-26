import Image from 'next/image';

export const NftCard = (): JSX.Element => {
  return (
    <div className="shadow-dashboard tablet:flex-row tablet:max-h-[112px] flex h-full max-h-[142px] flex-col rounded-lg">
      <div className="tablet:p-4 flex h-full w-full flex-col p-2 !pr-0">
        <p className="label mb-[5px] font-bold">NFT’s NEWS</p>
        <p className="label-small text-secondary-500">
          New ElephantX NFT to be lauched!
        </p>

        <a
          href="#"
          className="tablet:block link label-small text-primary-400 mt-auto hidden"
        >
          Read more +
        </a>
      </div>

      <div className="tablet:h-full h-[50%] w-full">
        <Image
          src="/images/eduphants-nft.png"
          alt="Eduphants nft"
          width={163}
          height={143}
          className="tablet:rounded-r-lg tablet:rounded-none h-full rounded-b-lg object-cover"
        />
      </div>
    </div>
  );
};
