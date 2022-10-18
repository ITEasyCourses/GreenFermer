import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from '../../core/enums/routes';

import { CatalogRouterComponent } from './catalog-router.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogRouterComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../catalog-page/catalog-page.module').then(
            (m) => m.CatalogPageModule
          )
      },
      {
        path: ERoutes.CATEGORY,
        loadChildren: () =>
          import('../category-page/category-page.module').then(
            (m) => m.CategoryPageModule
          )
      }
    ]
  }
];

@NgModule({
  declarations: [CatalogRouterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CatalogRouterModule {}
