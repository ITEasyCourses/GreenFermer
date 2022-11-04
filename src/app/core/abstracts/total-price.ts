import { IProductCardBucket } from '../interfaces/product-card-bucket.interface';

export abstract class TotalPrice {
  public static getTotalPrice(data: IProductCardBucket[]): number {
    return data.reduce((acc, el) => (acc += +el.totalPrice), 0);
  }
}
