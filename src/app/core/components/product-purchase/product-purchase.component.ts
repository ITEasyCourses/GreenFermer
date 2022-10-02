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
    cost: 20,
    wholesalecost: 18,
    wholesaleAmount: 5,
    minamount: 2,
    amount: 2,
    sum: 40
  };

  public minusproduct(): void {
    if (this.product.amount > this.product.minamount) {
      this.product.amount = this.product.amount - 1;
      if (this.product.amount < this.product.wholesaleAmount) {
        this.product.sum = this.product.amount * this.product.cost;
      } else {
        this.product.sum = this.product.amount * this.product.wholesalecost;
      }
    }
  }

  public plusproduct(): void {
    this.product.amount = this.product.amount + 1;
    if (this.product.amount < this.product.wholesaleAmount) {
      this.product.sum = this.product.amount * this.product.cost;
    } else {
      this.product.sum = this.product.amount * this.product.wholesalecost;
    }
  }
}
