import { IProductCardBucket } from './product-card-bucket.interface';

export interface PurchasePayloadEmitter {
  direction: number;
  productCard: IProductCardBucket;
}
