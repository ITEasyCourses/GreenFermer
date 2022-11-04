import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../button/button.module';

import { ProductPurchaseComponent } from './product-purchase.component';

@NgModule({
  declarations: [ProductPurchaseComponent],
  exports: [ProductPurchaseComponent],
  imports: [CommonModule, ButtonModule, IconSpriteModule]
})
export class ProductPurchaseModule {}
