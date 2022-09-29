import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, FeatherModule]
})
export class CartModule {}
