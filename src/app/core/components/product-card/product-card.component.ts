import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productCardImg =
    '../../../../assets/images/categories/Category%20icons=icon%20fruit.png';
  @Input() productCardTitle = 'Фрукти';

  constructor() {}
}
