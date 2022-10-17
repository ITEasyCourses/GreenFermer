import { ChangeDetectionStrategy, Component } from '@angular/core';

import { feedbackConstants } from '../../core/constants/feedback.constants';
import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';
import { Feedback } from '../../core/interfaces/feedback-interface';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent {
  public description = PRODUCT_DESCRIPTION;
  public arrFeedback: Feedback[] = feedbackConstants;
}
