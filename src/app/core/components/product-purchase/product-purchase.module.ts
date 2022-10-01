import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { CreditCard, DollarSign, MessageCircle } from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';

import { ProductPurchaseComponent } from './product-purchase.component';

const icons = {
  CreditCard,
  DollarSign,
  MessageCircle
};

@NgModule({
  declarations: [ProductPurchaseComponent],
  exports: [ProductPurchaseComponent, FeatherModule],
  imports: [CommonModule, FeatherModule.pick(icons), ButtonModule]
})
export class ProductPurchaseModule {}
