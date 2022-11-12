import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseComponent implements OnInit, OnChanges {
  @Input() product!: IProductCard;
  public amount = 0;
  public sum = 0;

  public maxWeight = 1000;
  public minWeight!: Number;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.bla();
    this.cdr.detectChanges();
  }

  ngOnChanges() {
    this.bla();
    this.cdr.detectChanges();
  }

  public bla(): void {
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

  // public addToBucket(): void {
  //   const product = {
  //     title: this.product.title,
  //     price: this.product.price,
  //     amount: this.amount,
  //     sum: this.sum
  //   };
  // }

  private wholesale(): void {
    if (this.amount < Number(this.product.optAmount)) {
      this.sum = Number(this.product.price) * this.amount;
    } else {
      this.sum = Number(this.product.optPrice) * this.amount;
    }
  }
}
