import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Output() public addToBasketEvent: EventEmitter<IProductCard> =
    new EventEmitter<IProductCard>();

  public card: IProductCard = {
    name: 'Малина',
    price: '23.00 грн/кг',
    image: ''
  };

  constructor() {}

  public addToBasket(): void {
    this.addToBasketEvent.emit();
  }
}
