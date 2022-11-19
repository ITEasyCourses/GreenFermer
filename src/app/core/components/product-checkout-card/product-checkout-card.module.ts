import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ProductCheckoutCardComponent } from './product-checkout-card.component';

@NgModule({
  declarations: [ProductCheckoutCardComponent],
  exports: [ProductCheckoutCardComponent],
  imports: [CommonModule, IconSpriteModule]
})
export class ProductCheckoutCardModule {}
