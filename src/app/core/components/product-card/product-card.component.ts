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
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  @Input() card!: IProductCard;
  public heart = false;

  public addToBasket(): void {
    this.addToBasketEvent.emit();
  }

  public like(): void {
    this.heart = !this.heart;
  }
}
