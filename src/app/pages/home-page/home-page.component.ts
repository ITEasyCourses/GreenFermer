import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductCategoryCard } from '../../core/constants/category-card.constants';
import { ProductCardConstants } from '../../core/constants/product-card.constants';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { IProductCategoryCard } from '../../core/interfaces/product-category-card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  productList: IProductCard[] = ProductCardConstants;
  sliderList: IProductCategoryCard[] = ProductCategoryCard;
}
