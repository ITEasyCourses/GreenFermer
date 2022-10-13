import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IProductCard } from '../../core/interfaces/i-product-card';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDetailPageComponent {
  @Input() products!: IProductCard[];
}
