import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TrackByFunction
} from '@angular/core';

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
  @Input() products!: IProductCard[];

  public mockSortTypes: SortOption[] = sortMapOptions;

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.id;
}
