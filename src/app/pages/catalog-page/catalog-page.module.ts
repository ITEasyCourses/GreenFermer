import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryCardModule } from '../../core/components/product-category-card/product-category-card.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';

import { CatalogPageComponent } from './catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent
  }
];

@NgModule({
  declarations: [CatalogPageComponent],
  exports: [CatalogPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCategoryCardModule,
    SortSelectModule
  ]
})
export class CatalogPageModule {}
