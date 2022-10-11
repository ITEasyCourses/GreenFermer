import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutResultPageComponent } from './checkout-result-page.component';
import { ButtonModule } from '../../core/components/button/button.module';

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
