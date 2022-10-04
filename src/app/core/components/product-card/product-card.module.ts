import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Heart, ShoppingCart } from 'angular-feather/icons';

import { ProductCardComponent } from './product-card.component';

const icons = {
  ShoppingCart,
  Heart
};

@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class ProductCardModule {}
