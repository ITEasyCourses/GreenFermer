import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { ProductDetailPageComponent } from '../product-detail-page/product-detail-page.component';

import { CatalogPageComponent } from './catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent,
    data: {
      breadcrumb: 'Каталог'
    },
    children: [
      {
        path: 'fruits',
        component: CategoryPageComponent,
        data: {
          breadcrumb: 'Фрукты'
        },
        children: [
          {
            path: 'apple',
            component: ProductDetailPageComponent,
            data: {
              breadcrumb: 'Яблоки'
            },
            children: [
              {
                path: 'red',
                component: ProductDetailPageComponent,
                data: {
                  breadcrumb: 'Яблуко Ред Джонапринц'
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [CatalogPageComponent],
  exports: [CatalogPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BreadcrumbsModule]
})
export class CatalogPageModule {}
