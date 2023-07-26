import { ICoinVariation } from '@/interfaces/coin-variation';
import colors from '@/theme/colors';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  data: ICoinVariation[];
};

export const ChartVariation = ({ data }: Props): JSX.Element => {
  const prices = data.slice(0, 10).map(item => item.price);
  const dates = data.slice(0, 10).map(item => item.date.toISOString());

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      },
      height: 112,
      width: 187
    },
    grid: {
      borderColor: 'rgba(163, 163, 163, 0.1)',
      show: true,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      position: 'back'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 0.6,
      type: 'gradient',
      colors: [colors['primary-500'], colors['primary-300']],
      gradient: {
        shade: 'light',
        opacityFrom: 0.8,
        opacityTo: 0.4
      }
    },
    stroke: {
      show: false
    }
  };

  return (
    <Chart
      options={options}
      series={[
        {
          name: 'Price',
          data: prices
        }
      ]}
      type="area"
    />
  );
};
