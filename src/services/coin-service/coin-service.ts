import { getEnv } from '@/config/environment';
import { ICoinInfo } from '@/interfaces/coin-info';
import { createHttpClient } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { GetCoinsResponse } from './types';

const httpClient = createHttpClient(getEnv('COINCAP_BASE_URL'));

export const getCoins = async (
  offset = 0,
  limit = 10,
  ids?: string[]
): Promise<ICoinInfo[]> => {
  const query = new URLSearchParams({
    offset: offset.toString(),
    limit: limit.toString(),
    ...(ids && { ids: ids.join(',') })
  });

  const { data } = await httpClient.get<GetCoinsResponse>(
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
  return useQuery(['trendingCoins'], () => getCoins());
};

export const useGetCoins = (limit: number, ids: string[] = []) => {
  return useQuery(['coins', limit, ids], () => getCoins(0, limit, ids));
};
