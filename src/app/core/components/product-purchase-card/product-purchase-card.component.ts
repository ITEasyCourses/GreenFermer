import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';
import { BucketService } from '../../services/bucket.service';

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
  public minWeight!: number;

  constructor(private bucketService: BucketService) {}

  public ngOnInit(): void {
    this.initCard();
    this.minWeight = Number(this.productCard.minAmount);
  }

  public countPrice(operator: number): void {
    if (this.productCard.price) {
      if (!operator) {
        if (this.counter > Number(this.productCard.minAmount)) {
          this.counter--;
        }
      } else if (this.counter >= 1000) {
        this.counter = 1000;
      } else this.counter++;
      this.wholesaleFlag = this.counter >= this.productCard.startWholesaleByKg;
      this.setTotalPriseAndCounterPrice();
      this.sendPayloadData();
    }
  }

  public deleteCard(card: IProductCardBucket): void {
    this.deleteCardEmitter.emit(this.productCard);
    this.bucketService.removeFromBucket(card.id);
    this.bucketService.setReRender();
  }

  private sendPayloadData(): void {
    this.productCard = {
      ...this.productCard,
      totalPrice: this.totalPrice,
      weight: this.counter
    };
    this.updateProductCard.emit(this.productCard);
    this.bucketService.setReRender();
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
    this.wholesaleFlag =
      this.productCard.weight >= this.productCard.startWholesaleByKg;
    this.cardPrice = this.wholesaleFlag
      ? this.productCard.wholesalePrice
      : this.productCard.price;
    this.setTotalPriseAndCounterPrice();
  }
}
