import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

import { ProductCardComponent } from '../../core/components/product-card/product-card.component';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: ERoutes.HOME,
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductCardModule]
})
export class HomePageModule {}
