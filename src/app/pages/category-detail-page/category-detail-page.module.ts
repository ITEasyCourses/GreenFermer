import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';
import { ERoutes } from '../../core/enums/routes';

import { CategoryDetailPageComponent } from './category-detail-page.component';
import { CategoryDetailResolver } from './category-detail.resolver';

const children: Routes = [
  {
    path: '',
    component: CategoryDetailPageComponent,
    data: { breadcrumb: null }
  },
  {
    path: ERoutes.PRODUCT_DETAIL,
    loadChildren: () =>
      import('../product-detail-page/product-detail-page.module').then(
        (m) => m.ProductDetailPageModule
      ),
    data: { breadcrumb: null }
  }
];

const routes: Routes = [
  {
    path: '',
    children,
    resolve: {
      breadcrumb: CategoryDetailResolver
    }
  }
];

@NgModule({
  declarations: [CategoryDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    SortSelectModule,
    BreadcrumbsModule,
    ProductCardModule
  ],
  providers: [CategoryDetailResolver]
})
export class CategoryDetailPageModule {}
