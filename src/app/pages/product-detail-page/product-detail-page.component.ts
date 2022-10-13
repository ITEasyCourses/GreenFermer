import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent {
  public description = PRODUCT_DESCRIPTION;
}
