import {
  BitcoinIcon,
  ChartIcon,
  CryptoWalletIcon,
  EthereumIcon
} from '@/components/ui/icons';

export const sidebarItems = [
  {
    icon: (
      <CryptoWalletIcon className="box-size-[24px] tablet:box-size-[32px]" />
    ),
    label: 'Wallet'
  },
  {
    icon: <EthereumIcon className="box-size-[24px] tablet:box-size-[32px]" />,
    label: 'Ethereum'
  },
  {
    icon: <BitcoinIcon className="box-size-[24px] tablet:box-size-[32px]" />,
    label: 'Bitcoin'
  },
  {
    icon: <ChartIcon className="box-size-[24px] tablet:box-size-[32px]" />,
    label: 'Charts'
  }
];
