import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';

@Component({
  selector: 'app-product-checkout-card',
  templateUrl: './product-checkout-card.component.html',
  styleUrls: ['./product-checkout-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCheckoutCardComponent implements OnInit {
  @Input() productCard!: IProductCardBucket;

  public counter = 1;
  public totalPrice!: string;
  public cardPrice!: string;
  public wholesaleFlag = false;

  public ngOnInit(): void {
    this.initCard();
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
