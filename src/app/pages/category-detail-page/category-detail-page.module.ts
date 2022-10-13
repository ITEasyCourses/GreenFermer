import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';

import { CategoryDetailPageComponent } from './category-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailPageComponent
  }
];

@NgModule({
  declarations: [CategoryDetailPageComponent],
  exports: [CategoryDetailPageComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    ProductCardModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryDetailPageModule {}
