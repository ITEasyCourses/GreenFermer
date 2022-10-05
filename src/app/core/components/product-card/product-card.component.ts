import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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

  @Input() card!: IProductCard;
  public heart = false;

  public addToBasket(card: IProductCard): void {
    this.addToBasketEvent.emit(card);
  }

  public like(): void {
    this.heart = !this.heart;
  }
}
