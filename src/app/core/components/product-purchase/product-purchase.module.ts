import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  CreditCard,
  MessageCircle,
  Folder,
  Plus,
  Minus
} from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';

import { ProductPurchaseComponent } from './product-purchase.component';

const icons = {
  CreditCard,
  MessageCircle,
  Folder,
  Plus,
  Minus
};

@NgModule({
  declarations: [ProductPurchaseComponent],
  exports: [ProductPurchaseComponent],
  imports: [CommonModule, FeatherModule.pick(icons), ButtonModule]
})
export class ProductPurchaseModule {}
