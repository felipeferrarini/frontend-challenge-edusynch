import { getEnv } from '@/config/environment';
import { ICoinInfo } from '@/interfaces/coin-info';
import { createHttpClient } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { GetTrendingCoinsResponse } from './types';

const httpClient = createHttpClient(getEnv('COINCAP_BASE_URL'));

export const getTrendingCoins = async (
  offset = 0,
  limit = 10
): Promise<ICoinInfo[]> => {
  const query = new URLSearchParams({
    offset: offset.toString(),
    limit: limit.toString()
  });

  const { data } = await httpClient.get<GetTrendingCoinsResponse>(
    `/v2/assets?${query}`
  );

  return data.data.map(
    coin =>
      ({
        currentPrice: Number(coin.priceUsd),
        id: coin.id,
        image: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
        name: coin.name,
        percentageChanged24h: Number(coin.changePercent24Hr),
        symbol: coin.symbol
      }) satisfies ICoinInfo
  );
};

export const useGetTrendingCoins = () => {
  return useQuery(['trendingCoins'], () => getTrendingCoins());
};
