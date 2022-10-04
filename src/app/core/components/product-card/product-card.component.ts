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
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  public heart = false;

  public card: IProductCard = {
    name: 'Малина',
    price: 23.01,
    image: ''
  };

  public addToBasket(): void {
    this.addToBasketEvent.emit();
  }

  public like(): void {
    this.heart = !this.heart;
  }
}
