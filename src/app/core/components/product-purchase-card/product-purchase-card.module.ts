import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Minus, Plus, Trash } from 'angular-feather/icons';

import { ProductPurchaseCardComponent } from './product-purchase-card.component';

const icons = {
  Plus,
  Minus,
  Trash
};

@NgModule({
  declarations: [ProductPurchaseCardComponent],
  exports: [ProductPurchaseCardComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class ProductPurchaseCardModule {}
