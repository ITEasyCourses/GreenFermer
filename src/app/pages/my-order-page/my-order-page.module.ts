import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderCardComponentModule } from '../../core/components/order-card-component/order-card-component.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';
import { ToggleViewModule } from '../../core/components/toggle-view/toggle-view.module';

import { MyOrderPageComponent } from './my-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrderPageComponent
  }
];

@NgModule({
  declarations: [MyOrderPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SortSelectModule,
    OrderCardComponentModule,
    ToggleViewModule
  ]
})
export class MyOrderPageModule {}
