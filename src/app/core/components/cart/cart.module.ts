import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ShoppingCart } from 'angular-feather/icons';

import { CartComponent } from './cart.component';

const icons = {
  ShoppingCart
};

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class CartModule {}
