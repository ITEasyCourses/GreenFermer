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

  @Output() updateProductCard: EventEmitter<IProductCardBucket> =
    new EventEmitter<IProductCardBucket>();

  @Output() deleteCardEmitter: EventEmitter<IProductCardBucket> =
    new EventEmitter<IProductCardBucket>();

  public counter = 1;
  public totalPrice!: string;
  public cardPrice!: string;
  public wholesaleFlag = false;

  public ngOnInit(): void {
    this.initCard();
  }

  public countPrice(operator: number): void {
    if (this.productCard.price) {
      if (!operator) {
        this.counter--;
      } else if (this.counter >= 1000) {
        this.counter = 1000;
      } else this.counter++;
      this.wholesaleFlag = this.counter >= this.productCard.startWholesaleByKg;
      this.setTotalPriseAndCounterPrice();
      this.sendPayloadData();
    }
  }

  public deleteCard(): void {
    this.deleteCardEmitter.emit(this.productCard);
  }

  private sendPayloadData(): void {
    this.productCard = {
      ...this.productCard,
      totalPrice: this.totalPrice,
      weight: this.counter
    };
    this.updateProductCard.emit(this.productCard);
  }

  private setTotalPriseAndCounterPrice(): void {
    const type = this.wholesaleFlag ? 'wholesalePrice' : 'price';
    const uah = +this.productCard[type].split('.')[0];
    const cent = +this.productCard[type].split('.')[1];
    this.cardPrice = this.productCard[type];
    this.totalPrice = (((uah * 100 + cent) * this.counter) / 100).toFixed(2);
  }

  private initCard(): void {
    this.counter = this.productCard.weight;
    if (this.productCard.weight < this.productCard.startWholesaleByKg) {
      this.cardPrice = this.productCard.price;
      this.wholesaleFlag = false;
    } else {
      this.cardPrice = this.productCard.wholesalePrice;
      this.wholesaleFlag = true;
    }
    this.setTotalPriseAndCounterPrice();
  }
}
