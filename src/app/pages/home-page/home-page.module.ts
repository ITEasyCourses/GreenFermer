import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SearchModule } from '../../core/components/search/search.module';
import { SliderModule } from '../../core/components/slider/slider.module';

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
    SearchModule,
    SliderModule
  ]
})
export class HomePageModule {}
