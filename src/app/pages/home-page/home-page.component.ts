import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HEADER_SLIDER } from '../../core/constants/home-page.constans';
import { ProductCardConstants } from '../../core/constants/product-card.constants';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { ProductCategoryCardInterface } from '../../core/interfaces/product-category-card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  productList: IProductCard[] = ProductCardConstants;
  sliderList: ProductCategoryCardInterface[] = HEADER_SLIDER;
}
