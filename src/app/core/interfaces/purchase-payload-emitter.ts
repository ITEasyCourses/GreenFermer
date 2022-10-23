import { BucketCardArgType } from '../types/application-types';

import { IProductCardBucket } from './product-card-bucket.interface';

export interface PurchasePayloadEmitter {
  direction: number;
  productCard: IProductCardBucket;
  // priceDetector: string;

  // TODO возможо название полей изменятся. В этом случае изменить типизацию
  priceType: BucketCardArgType;
}
