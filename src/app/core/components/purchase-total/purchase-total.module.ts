import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../button/button.module';

import { PurchaseTotalComponent } from './purchase-total.component';

@NgModule({
  declarations: [PurchaseTotalComponent],
  exports: [PurchaseTotalComponent],
  imports: [CommonModule, ButtonModule]
})
export class PurchaseTotalModule {}
