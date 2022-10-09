import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyOrderPageComponent } from './my-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrderPageComponent
  }
];

@NgModule({
  declarations: [MyOrderPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MyOrderPageModule {}
