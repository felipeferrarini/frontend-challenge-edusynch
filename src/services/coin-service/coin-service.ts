import { getEnv } from '@/config/environment';
import { ICoinInfo } from '@/interfaces/coin-info';
import { ICoinVariation } from '@/interfaces/coin-variation';
import { createHttpClient } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { GetCoinVariationResponse, GetCoinsResponse } from './types';

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

export const getCoinVariation = async (
  id: string
): Promise<{ info: ICoinInfo; variation: ICoinVariation[] }> => {
  const { data } = await httpClient.get<GetCoinVariationResponse>(
    `/v2/assets/${id}/history?interval=d1`
  );

  const info = await getCoins(0, 1, [id]);

  const variation = data.data.map(item => ({
    date: new Date(item.time),
    price: Number(item.priceUsd)
  }));

  return { info: info[0], variation };
};

export const useGetCoinVariation = (id: string) => {
  return useQuery(['coinVariation', id], () => getCoinVariation(id));
};
