import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IProductCard } from '../../core/interfaces/i-product-card';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent {
  public img = '../../../assets/images/category-page/fruits.png';
  allProduct!: IProductCard[];
}
