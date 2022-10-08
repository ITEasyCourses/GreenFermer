import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

import { HeaderComponentModule } from '../../core/components/header-component/header-component.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: ERoutes.HOME,
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule,
    HeaderComponentModule
  ]
})
export class HomePageModule {}
