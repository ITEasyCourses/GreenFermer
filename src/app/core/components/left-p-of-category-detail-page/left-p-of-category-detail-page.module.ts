import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { ProductCardModule } from '../product-card/product-card.module';

import { LeftPOfCategoryDetailPageComponent } from './left-p-of-category-detail-page.component';

@NgModule({
  declarations: [LeftPOfCategoryDetailPageComponent],
  exports: [LeftPOfCategoryDetailPageComponent],
  imports: [CommonModule, BreadcrumbsModule, ProductCardModule]
})
export class LeftPOfCategoryDetailPageModule {}
