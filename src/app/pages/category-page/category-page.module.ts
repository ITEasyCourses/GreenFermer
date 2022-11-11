import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SearchModule } from '../../core/components/search/search.module';
import { ERoutes } from '../../core/enums/routes';

import { CategoryPageComponent } from './category-page.component';
import { CategoryResolver } from './category.resolver';

const children: Routes = [
  {
    path: '',
    component: CategoryPageComponent,
    data: { breadcrumb: null }
  },
  {
    path: ERoutes.CATEGORY_ID,
    loadChildren: () =>
      import('../category-detail-page/category-detail-page.module').then(
        (m) => m.CategoryDetailPageModule
      ),
    data: { breadcrumb: null }
  }
];

const routes: Routes = [
  {
    path: '',
    children,
    resolve: {
      breadcrumb: CategoryResolver
    }
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  exports: [CategoryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchModule,
    ProductCardModule,
    BreadcrumbsModule
  ],
  providers: [CategoryResolver]
})
export class CategoryPageModule {}
