import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CategoryDetailConst } from '../../core/constants/category-detail-page.constants';
import { sortMapOptions } from '../../core/constants/sort-map-options';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDetailPageComponent {
  @Input() products: IProductCard[] = CategoryDetailConst;

  public mockSortTypes: SortOption[] = sortMapOptions;
}
