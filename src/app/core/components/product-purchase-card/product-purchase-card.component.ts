import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';
import { PurchasePayloadEmitter } from '../../interfaces/purchase-payload-emitter';

@Component({
  selector: 'app-product-purchase-card',
  templateUrl: './product-purchase-card.component.html',
  styleUrls: ['./product-purchase-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseCardComponent implements OnInit {
  @Input() productCard!: IProductCardBucket;

  @Output() totalPriceInCents: EventEmitter<number> =
    new EventEmitter<number>();

  @Output() totalWeight: EventEmitter<PurchasePayloadEmitter> =
    new EventEmitter<PurchasePayloadEmitter>();

  @Output() deleteCardEmitter: EventEmitter<IProductCardBucket> =
    new EventEmitter<IProductCardBucket>();

  public counter = 1;
  public totalPrice!: string;
  public wholesale = false;

  public countPrice(operator: number): void {
    if (this.productCard.price) {
      if (operator === 0) {
        if (this.counter !== 1) {
          this.counter--;
          this.countWeightByDirection(operator);
        } else this.counter = 1;
      } else if (this.counter >= 1000) {
        this.counter = 1000;
      } else {
        this.counter++;
        this.countWeightByDirection(operator);
      }
      this.totalPrice = (
        this.getPriceInCentByCounter(this.productCard) / 100
      ).toFixed(2);
      this.totalPriceInCents.emit(
        this.getPriceInCentByCounter(this.productCard)
      );
    }
  }

  public deleteCard(): void {
    this.deleteCardEmitter.emit(this.productCard);
  }

  public ngOnInit(): void {
    this.initCard();
  }

  private countWeightByDirection(direction: number): void {
    const payload = { direction, productCard: this.productCard };
    this.totalWeight.emit(payload);
  }

  private getPriceInCentByCounter(card: IProductCardBucket): number {
    const uah = +card.price.split('.')[0];
    const cent = +card.price.split('.')[1];
    return (uah * 100 + cent) * this.counter;
  }

  private initCard(): void {
    this.counter = this.productCard.weight;
    this.totalPrice = (
      this.getPriceInCentByCounter(this.productCard) / 100
    ).toFixed(2);
  }
}
