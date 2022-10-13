import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from '../../core/components/button/button.module';

import { CheckoutResultPageComponent } from './checkout-result-page.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutResultPageComponent
  }
];

@NgModule({
  declarations: [CheckoutResultPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule]
})
export class CheckoutResultPageModule {}
