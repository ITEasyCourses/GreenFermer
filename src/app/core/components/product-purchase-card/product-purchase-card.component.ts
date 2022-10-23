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
import { BucketCardArgType } from '../../types/application-types';

@Component({
  selector: 'app-product-purchase-card',
  templateUrl: './product-purchase-card.component.html',
  styleUrls: ['./product-purchase-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseCardComponent implements OnInit {
  @Input() productCard!: IProductCardBucket;

  @Output() productCardWithData: EventEmitter<PurchasePayloadEmitter> =
    new EventEmitter<PurchasePayloadEmitter>();

  @Output() deleteCardEmitter: EventEmitter<IProductCardBucket> =
    new EventEmitter<IProductCardBucket>();

  public counter = 1;
  public totalPrice!: string;
  public cardPrice!: string;
  public wholesaleFlag = false;

  private directionOperatorForSendData!: number;

  public countPrice(operator: number): void {
    if (this.productCard.price) {
      if (operator === 0) {
        if (this.counter !== 1) {
          this.counter--;
          this.directionOperatorForSendData = 0;
        } else this.counter = 1;
      } else if (this.counter >= 1000) {
        this.counter = 1000;
      } else {
        this.counter++;
        this.directionOperatorForSendData = 1;
      }
      if (this.counter >= this.productCard.startWholesaleByKg) {
        this.totalPrice = (
          this.getConvertStrPriseToNumAndSetCounterPrice('wholesalePrice') / 100
        ).toFixed(2);
        this.sendPayloadData();
        this.wholesaleFlag = true;
      } else {
        this.totalPrice = (
          this.getConvertStrPriseToNumAndSetCounterPrice('price') / 100
        ).toFixed(2);
        this.sendPayloadData();
        this.wholesaleFlag = false;
      }
      this.productCard.weight = this.counter;
    }
  }

  public deleteCard(): void {
    this.deleteCardEmitter.emit(this.productCard);
  }

  public ngOnInit(): void {
    this.initCard();
  }

  private sendPayloadData(): void {
    this.productCard = {
      ...this.productCard,
      totalPrice: this.totalPrice,
      weight: this.counter
    };
    const payload = {
      productCard: this.productCard,
      direction: this.directionOperatorForSendData
    };
    this.productCardWithData.emit(payload);
  }

  private getConvertStrPriseToNumAndSetCounterPrice(
    type: BucketCardArgType
  ): number {
    const uah = +this.productCard[type].split('.')[0];
    const cent = +this.productCard[type].split('.')[1];
    this.cardPrice = this.productCard[type];
    return (uah * 100 + cent) * this.counter;
  }

  private initCard(): void {
    this.counter = this.productCard.weight;
    if (this.productCard.weight < this.productCard.startWholesaleByKg) {
      this.cardPrice = this.productCard.price;
      this.wholesaleFlag = false;
      this.totalPrice = (
        this.getConvertStrPriseToNumAndSetCounterPrice('price') / 100
      ).toFixed(2);
    } else {
      this.cardPrice = this.productCard.wholesalePrice;
      this.wholesaleFlag = true;
      this.totalPrice = (
        this.getConvertStrPriseToNumAndSetCounterPrice('wholesalePrice') / 100
      ).toFixed(2);
    }
  }
}
