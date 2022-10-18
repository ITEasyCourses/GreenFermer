import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PRODUCT_DESCRIPTION } from '../../core/constants/product-detail.constants';
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

  public cards: IProductCard[] = [
    {
      name: 'Полуниця',
      price: 123,
      image: ''
    },
    {
      name: 'Малина',
      price: 123,
      image: ''
    },
    {
      name: 'Лохина',
      price: 123,
      image: ''
    },
    {
      name: 'Малина',
      price: 123,
      image: ''
    },
    {
      name: 'Малина',
      price: 123,
      image: ''
    }
  ];

  public mockSortTypes!: SortOption[];
}
