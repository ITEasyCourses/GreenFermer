import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import { ButtonModule } from '../button/button.module';

import { PurchaseTotalComponent } from './purchase-total.component';

@NgModule({
  declarations: [PurchaseTotalComponent],
  exports: [PurchaseTotalComponent],
  imports: [CommonModule, FeatherModule, ButtonModule]
})
export class PurchaseTotalModule {}
