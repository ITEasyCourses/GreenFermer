export interface IOrderCardFields {
  isDane: boolean;
  ordersNumber: number;
  dayOfOder: string;
  cityFromOder: string;
  cityToOder: string;
  orderAddedProducts: IOrderAddedProducts[];
  sumOderProducts: number;
}

export interface IOrderAddedProducts {
  productName: string;
  productPrice: number;
  productAmount: number;
  productSum: number;
}
