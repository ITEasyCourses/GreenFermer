import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';
import { BucketService } from '../../services/bucket.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseComponent implements OnInit {
  @Input() product!: IProductCard;
  public amount!: number;
  public sum!: number;
  public maxWeight = 1000;
  public minWeight!: number;

  constructor(private cdr: ChangeDetectorRef, private bucket: BucketService) {}
  ngOnInit() {
    this.init();
    this.cdr.detectChanges();
  }

  public init(): void {
    this.amount = Number(this.product.minAmount);
    this.sum = this.amount * Number(this.product.price);
    this.minWeight = Number(this.product.minAmount);
  }

  public minusProduct(): void {
    if (this.amount > Number(this.product.minAmount)) {
      this.amount = this.amount - 1;
      this.wholesale();
    }
  }

  public plusProduct(): void {
    if (this.amount < this.maxWeight) {
      this.amount = this.amount + 1;
      this.wholesale();
    }
  }

  public addToBucket(): void {
    const product = {
      title: this.product.title,
      id: this.product.id,
      optPrice: this.product.optPrice,
      price: this.product.price,
      amount: this.amount,
      optAmount: this.product.optAmount,
      sum: this.sum
    };
    this.bucket.setGoodsInLocalStorage(product);
  }

  private wholesale(): void {
    if (this.amount < Number(this.product.optAmount)) {
      this.sum = Number(this.product.price) * this.amount;
    } else {
      this.sum = Number(this.product.optPrice) * this.amount;
    }
  }
}
