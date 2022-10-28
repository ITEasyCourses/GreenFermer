import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SearchModule } from '../../core/components/search/search.module';
import { ERoutes } from '../../core/enums/routes';

import { CategoryPageComponent } from './category-page.component';

const children: Routes = [
  {
    path: '',
    component: CategoryPageComponent
  },
  {
    path: ERoutes.CATEGORY_ID,
    loadChildren: () =>
      import('../category-detail-page/category-detail-page.module').then(
        (m) => m.CategoryDetailPageModule
      )
  }
];

const routes: Routes = [
  {
    path: '',
    children
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  exports: [CategoryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchModule,
    ProductCardModule
  ]
})
export class CategoryPageModule {}
