export interface CoinVariation {
  priceUsd: string;
  time: number;
}

export interface GetCoinVariationResponse {
  data: CoinVariation[];
}
