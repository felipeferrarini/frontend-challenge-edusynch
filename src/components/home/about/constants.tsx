import {
  BitcoinIcon,
  ChartIcon,
  EthereumIcon,
  LaptopMobileIcon
} from '@/components/ui/icons';
import { InfoCardProps } from './info-card';

export const aboutInfos: InfoCardProps[] = [
  {
    label: 'For your company 1',
    title: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    icon: <BitcoinIcon />
  },
  {
    label: 'For your company 2',
    title: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    icon: <EthereumIcon />
  },
  {
    label: 'For your company 3',
    title: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    icon: <ChartIcon />
  },
  {
    label: 'For your company 4',
    title: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    icon: <LaptopMobileIcon />
  }
];
