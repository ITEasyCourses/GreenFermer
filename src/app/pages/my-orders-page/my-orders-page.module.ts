import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyOrdersPageComponent } from './my-orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrdersPageComponent
  }
];

@NgModule({
  declarations: [MyOrdersPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MyOrdersPageModule {}
