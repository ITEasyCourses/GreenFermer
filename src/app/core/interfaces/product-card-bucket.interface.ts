export interface IProductCardBucket {
  id: number;
  price: string;
  productName: string;
  img: string;
  weight: number;
  wholesalePrice?: string;
  startWholesaleByKg?: number;
}
