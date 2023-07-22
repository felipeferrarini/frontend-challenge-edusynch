import { getEnv } from '@/config/environment';
import { ICoinInfo } from '@/interfaces/coin-info';
import { createHttpClient } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { ExternalCoinInfo } from './types';

const httpClient = createHttpClient(getEnv('COINGECKO_BASE_URL'));

export const getTrendingCoins = async (
  page = 1,
  perPage = 10,
  currency = 'USD'
): Promise<ICoinInfo[]> => {
  const query = new URLSearchParams({
    vs_currency: currency,
    order: 'gecko_desc',
    per_page: perPage.toString(),
    page: page.toString(),
    sparkline: 'false',
    price_change_percentage: '24h'
  });

  const response = await httpClient.get<ExternalCoinInfo[]>(
    `/api/v3/coins/markets?${query}`
  );

  return response.data.map(coin => ({
    currentPrice: coin.current_price,
    id: coin.id,
    image: coin.image,
    name: coin.name,
    percentageChanged24h: coin.price_change_percentage_24h,
    symbol: coin.symbol
  }));
};

export const useGetTrendingCoins = () => {
  return useQuery(['trendingCoins'], () => getTrendingCoins());
};
