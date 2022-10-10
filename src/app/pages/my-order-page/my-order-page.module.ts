import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { AlignJustify, Grid } from 'angular-feather/icons';

import { OrderCardComponentModule } from '../../core/components/order-card-component/order-card-component.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';

import { MyOrderPageComponent } from './my-order-page.component';

const icons = {
  Grid,
  AlignJustify
};

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
    FeatherModule.pick(icons),
    SortSelectModule,
    OrderCardComponentModule
  ]
})
export class MyOrderPageModule {}
