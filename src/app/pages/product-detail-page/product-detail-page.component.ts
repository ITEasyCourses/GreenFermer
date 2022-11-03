import {
  ChangeDetectionStrategy,
  Component,
  TrackByFunction
} from '@angular/core';

import { CategoryDetailConst } from '../../core/constants/category-detail-page.constants';
import { feedbackConstants } from '../../core/constants/feedback.constants';
import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';
import { Feedback } from '../../core/interfaces/feedback-interface';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent {
  public description = PRODUCT_DESCRIPTION;

  public cards: IProductCard[] = CategoryDetailConst;

  public mockSortTypes!: SortOption[];
  public arrFeedback: Feedback[] = feedbackConstants;
  public trackByFn: TrackByFunction<Feedback> = (index, item) => item.name;
}
