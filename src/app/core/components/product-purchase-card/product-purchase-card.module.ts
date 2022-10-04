import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductPurchaseCardComponent } from './product-purchase-card.component';

@NgModule({
  declarations: [ProductPurchaseCardComponent],
  exports: [ProductPurchaseCardComponent],
  imports: [CommonModule]
})
export class ProductPurchaseCardModule {}
