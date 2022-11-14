import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';
import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';
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

  constructor(
    private cdr: ChangeDetectorRef,
    private bucketService: BucketService
  ) {}

  public ngOnInit(): void {
    this.init();
    this.cdr.detectChanges();
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
    const product: IProductCardBucket = {
      productName: this.product.title,
      img: this.product.images[0],
      id: this.product.id,
      wholesalePrice: this.product.optPrice + '.00',
      price: this.product.price + '.00',
      weight: this.amount,
      startWholesaleByKg: +this.product.optAmount,
      totalPrice: String(this.sum) + '.00',
      minAmount: this.product.minAmount
    };
    this.bucketService.addToBasket(product);
  }

  private init(): void {
    this.amount = Number(this.product.minAmount);
    this.sum = this.amount * Number(this.product.price);
    this.minWeight = Number(this.product.minAmount);
  }

  private wholesale(): void {
    if (this.amount < Number(this.product.optAmount)) {
      this.sum = Number(this.product.price) * this.amount;
    } else {
      this.sum = Number(this.product.optPrice) * this.amount;
    }
  }
}
