import { ChangePercentage } from '@/components/ui/common';
import { ICoinInfo } from '@/interfaces/coin-info';
import { formatCurrency } from '@/utils/number-utils';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

type Props = {
  data: ICoinInfo[];
};

export const MobileAccordion = ({ data }: Props): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-stretch gap-2">
      <div className="label-small text-secondary-500 inline-flex justify-between px-6">
        <p>Crypto</p>
        <p>Actions</p>
      </div>

      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        {data.map(coin => (
          <Accordion.Item
            key={`accordion-item-${coin.id}`}
            value={coin.id}
            className="group overflow-hidden focus-within:relative focus-within:z-10"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="group-even:bg-secondary-100 flex flex-1 items-center justify-between p-4">
                <div className="label-small inline-flex items-center gap-4">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                  />

                  <p>
                    {coin.name}{' '}
                    <span className="text-secondary-500">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </p>
                </div>
                <ChevronDownIcon
                  className="text-primary-300 box-size-[16px] transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <div className="bg-secondary-200 desktop:hidden h-[1px] w-full" />
              <div className="label-small text-secondary-500 flex w-full flex-col gap-4 p-4">
                <div className="inline-flex justify-between">
                  <p>Price</p>
                  <p className="label text-text-base">
                    {formatCurrency(coin.currentPrice)}
                  </p>
                </div>
                <div className="inline-flex justify-between">
                  <p>Change</p>
                  <p className="label">
                    <ChangePercentage value={coin.percentageChanged24h} />
                  </p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
