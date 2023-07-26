import { ICoinInfo } from './coin-info';

export interface IWalletInfo extends ICoinInfo {
  quantity: number;
  totalPrice: number;
}
