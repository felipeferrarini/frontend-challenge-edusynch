export interface ExternalCoinInfo {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
}

export type GetTrendingCoinsResponse = {
  data: ExternalCoinInfo[];
};
