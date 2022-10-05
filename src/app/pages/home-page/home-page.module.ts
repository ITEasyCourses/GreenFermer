import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

import { OrderCardComponentModule } from '../../core/components/order-card-component/order-card-component.module';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: ERoutes.HOME,
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrderCardComponentModule
  ]
})
export class HomePageModule {}
