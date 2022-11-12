import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TrackByFunction
} from '@angular/core';

import { feedbackConstants } from '../../core/constants/feedback.constants';
import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';
import { PRODUCT_INFO_CARD } from '../../core/constants/product-info-component.constants';
import { Feedback } from '../../core/interfaces/feedback-interface';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { ProductInfo } from '../../core/interfaces/product-info-component-interface';
import { SortOption } from '../../core/interfaces/sort-option';
import { PopularService } from '../../core/services/popular.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent implements OnInit {
  public productPurchase!: IProductCard;

  public description = PRODUCT_DESCRIPTION;

  public cards!: IProductCard[];
  public mockSortTypes!: SortOption[];

  public arrFeedback: Feedback[] = feedbackConstants;

  public productCard: ProductInfo = PRODUCT_INFO_CARD;
  constructor(private popular: PopularService) {}
  public trackByFn: TrackByFunction<Feedback> = (index, item) => item.name;

  ngOnInit() {
    this.popular
      .getPopulars()
      .pipe()
      .subscribe((res) => {
        this.productPurchase = res[5];
      });
  }
}
