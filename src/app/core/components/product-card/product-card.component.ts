import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProductCardInterface } from '../../interfaces/product-card.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() productCard: ProductCardInterface = {
    img: '../../../../assets/images/categories/Category%20icons=icon%20cheese.png',
    title: 'Фрукти'
  };
}
