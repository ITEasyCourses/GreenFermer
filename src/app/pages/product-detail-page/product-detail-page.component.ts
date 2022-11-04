import {
  ChangeDetectionStrategy,
  Component,
  TrackByFunction
} from '@angular/core';

import { feedbackConstants } from '../../core/constants/feedback.constants';
import { PRODUCT_ITEM } from '../../core/constants/product-detail-page-item.constants';
import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';
import { PRODUCT_INFO_CARD } from '../../core/constants/product-info-component.constants';
import { PRODUCT_PURCHASE } from '../../core/constants/product-purchase';
import { Feedback } from '../../core/interfaces/feedback-interface';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { ProductInfo } from '../../core/interfaces/product-info-component-interface';
import { ProductPurchase } from '../../core/interfaces/product-purchase.interface';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent {
  public description = PRODUCT_DESCRIPTION;

  public cards: IProductCard[] = PRODUCT_ITEM;

  public mockSortTypes!: SortOption[];
  public arrFeedback: Feedback[] = feedbackConstants;

  public productCard: ProductInfo = PRODUCT_INFO_CARD;

  public productPurchase: ProductPurchase = PRODUCT_PURCHASE;
  public trackByFn: TrackByFunction<Feedback> = (index, item) => item.name;
}
