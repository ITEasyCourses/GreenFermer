import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  sliderList: ProductCategoryCardInterface[] = [
    {
      img: '../../../../assets/images/categories/Category%20icons=icon%20cheese.png',
      title: 'Фрукти'
    },
    {
      img: '../../../../assets/images/categories/Category%20icons=icon%20cheese.png',
      title: 'Фрукти'
    }
  ];
}
