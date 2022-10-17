import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { ERoutes } from '../../core/enums/routes';

import { CategoryPageComponent } from './category-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageComponent,
    children: [
      {
        path: ERoutes.CATEGORY_ID,
        loadChildren: () =>
          import('./../category-detail-page/category-detail-page.module').then(
            (m) => m.CategoryDetailPageModule
          )
      }
    ]
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductCardModule]
})
export class CategoryPageModule {}
