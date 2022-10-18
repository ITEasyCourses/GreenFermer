import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';

import { CategoryDetailPageComponent } from './category-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailPageComponent
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
  ]
})
export class CategoryDetailPageModule {}
