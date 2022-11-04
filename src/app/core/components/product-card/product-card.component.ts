import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  @Input() card!: IProductCard;
  public heart = false;
  public img!: string | undefined;

  ngOnInit(): void {
    this.findImg();
  }

  public addToBasket(): void {
    this.addToBasketEvent.emit();
  }

  public like(): void {
    this.heart = !this.heart;
  }

  private findImg(): void {
    this.img = this.card.images.find((el) => el !== '');
  }
}
