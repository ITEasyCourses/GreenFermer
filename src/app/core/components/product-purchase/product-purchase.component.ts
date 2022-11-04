import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  ProductPurchase,
  ProductToolsPurchase
} from '../../interfaces/product-purchase.interface';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseComponent implements OnInit {
  @Input() product!: ProductPurchase;

  public productTools: ProductToolsPurchase = {
    amount: 0,
    sum: 0
  };

  public maxWeight = 1000;

  public ngOnInit(): void {
    this.productTools.amount = this.product.minAmount;
    this.productTools.sum = this.productTools.amount * this.product.cost;
  }

  public minusProduct(): void {
    if (this.productTools.amount > this.product.minAmount) {
      this.productTools.amount = this.productTools.amount - 1;
      this.wholesale();
    }
  }

  public plusProduct(): void {
    if (this.productTools.amount < this.maxWeight) {
      this.productTools.amount = this.productTools.amount + 1;
      this.wholesale();
    }
  }

  private wholesale(): void {
    if (this.productTools.amount < this.product.wholesaleAmount) {
      this.productTools.sum = this.product.cost * this.productTools.amount;
    } else {
      this.productTools.sum =
        this.product.wholesaleCost * this.productTools.amount;
    }
  }
}
