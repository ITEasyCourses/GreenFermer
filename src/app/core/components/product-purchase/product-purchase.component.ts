import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProductPurchase } from '../../interfaces/product-purchase.interface';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseComponent {
  @Input() product: ProductPurchase = {
    cost: 25,
    wholesaleCost: 20,
    wholesaleAmount: 5,
    minAmount: 2,
    amount: 2,
    sum: 40
  };

  public minusProduct(): void {
    if (this.product.amount > this.product.minAmount) {
      this.product.amount = this.product.amount - 1;
      this.wholesale();
    }
  }

  public plusProduct(): void {
    this.product.amount = this.product.amount + 1;
    this.wholesale();
  }

  private wholesale(): void {
    if (this.product.amount < this.product.wholesaleAmount) {
      this.product.sum = this.product.cost * this.product.amount;
    } else {
      this.product.sum = this.product.wholesaleCost * this.product.amount;
    }
  }
}
