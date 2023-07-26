export enum TransferCryptoType {
  TransferIn = 'TransferIn',
  TransferOut = 'TransferOut'
}

export type TransferCryptoParams = {
  cryptoId: string;
  quantity: number;
  type: TransferCryptoType;
};
