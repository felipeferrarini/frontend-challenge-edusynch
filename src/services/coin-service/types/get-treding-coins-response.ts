export interface ExternalCoinInfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export type GetTrendingCoinsResponse = ExternalCoinInfo[];
