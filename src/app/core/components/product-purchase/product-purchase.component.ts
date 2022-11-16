import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Self
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';
import { IProductCardBucket } from '../../interfaces/product-card-bucket.interface';
import { BucketService } from '../../services/bucket.service';
import { UnsubscribeService } from '../../services/unsubscribe.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class ProductPurchaseComponent implements OnInit {
  @Input() product!: IProductCard;

  public productBucket!: IProductCardBucket;
  public amount!: number;
  public sum!: number;
  public maxWeight = 1000;
  public minWeight!: number;

  constructor(
    @Self() private unsubscribeService: UnsubscribeService,

    private cdr: ChangeDetectorRef,
    private bucketService: BucketService
  ) {}

  public ngOnInit(): void {
    this.productBucket = this.bucketService.interfaceChange(this.product);
    this.isInBucket();
    this.init();
    this.wholesale();
    this.reRenderBySubscribe();
  }

  public isInBucket(): void {
    if (this.bucketService.isInBucket(this.productBucket.id)) {
      this.productBucket = this.bucketService.getBucketItemForPurchase(
        this.productBucket.id
      );
    }
  }

  public minusProduct(): void {
    if (this.amount > Number(this.productBucket.minAmount)) {
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
      productName: this.productBucket.productName,
      img: this.productBucket.img,
      id: this.productBucket.id,
      wholesalePrice: this.productBucket.wholesalePrice,
      price: this.productBucket.price,
      weight: this.amount,
      startWholesaleByKg: +this.productBucket.startWholesaleByKg,
      totalPrice: String(this.sum) + '.00',
      minAmount: this.productBucket.minAmount
    };

    if (this.bucketService.isInBucket(product.id)) {
      this.bucketService.removeFromBucket(product.id);
      this.bucketService.addToBasket(product);
    } else {
      this.bucketService.addToBasket(product);
    }
  }

  private init(): void {
    this.amount = Number(this.productBucket.weight);
    this.sum = this.amount * Number(this.productBucket.price);
    this.minWeight = Number(this.productBucket.minAmount);
  }

  private wholesale(): void {
    if (this.amount < Number(this.productBucket.startWholesaleByKg)) {
      this.sum = Number(this.productBucket.price) * this.amount;
    } else {
      this.sum = Number(this.productBucket.wholesalePrice) * this.amount;
    }
  }

  private reRenderBySubscribe(): void {
    this.bucketService
      .reRender()
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe(() => {
        this.isInBucket();
        this.init();
        this.wholesale();
        this.cdr.detectChanges();
      });
  }
}
