import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ProductPurchaseCardComponent } from './product-purchase-card.component';

@NgModule({
  declarations: [ProductPurchaseCardComponent],
  exports: [ProductPurchaseCardComponent],
  imports: [CommonModule, IconSpriteModule]
})
export class ProductPurchaseCardModule {}
