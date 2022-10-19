import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';

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

  @Output() totalWeight: EventEmitter<any> = new EventEmitter<any>();

  @Output() deleteCardEmitter: EventEmitter<any> = new EventEmitter<any>();
  public counter = 1;
  public totalPrice!: string;

  public countPrice(operator: number): void {
    const uah = +this.productCard.price.split('.')[0];
    const cent = +this.productCard.price.split('.')[1];
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
      const result = (uah * 100 + cent) * this.counter;
      this.totalPrice = (result / 100).toFixed(2);
      this.totalPriceInCents.emit(result);
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

  private initCard(): void {
    this.counter = this.productCard.weight;
    const uah = +this.productCard.price.split('.')[0];
    const cent = +this.productCard.price.split('.')[1];
    const result = (uah * 100 + cent) * this.counter;
    this.totalPrice = (result / 100).toFixed(2);
  }
}
