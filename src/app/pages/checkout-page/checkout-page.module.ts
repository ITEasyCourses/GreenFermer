import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputModule } from '../../core/components/input/input.module';

import { CheckoutPageComponent } from './checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPageComponent
  }
];

@NgModule({
  declarations: [CheckoutPageComponent],
  exports: [CheckoutPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), InputModule]
})
export class CheckoutPageModule {}
