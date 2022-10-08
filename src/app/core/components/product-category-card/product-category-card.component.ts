import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProductCategoryCardInterface } from '../../interfaces/product-category-card.interface';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryCardComponent {
  @Input() productCategoryCard: ProductCategoryCardInterface = {
    img: '../../../../assets/images/categories/Category%20icons=icon%20cheese.png',
    title: 'Фрукти',
    id: 1
  };
}
