import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';

import { CategoryDetailPageComponent } from './category-detail-page.component';

@NgModule({
  declarations: [CategoryDetailPageComponent],
  exports: [CategoryDetailPageComponent],
  imports: [CommonModule, BreadcrumbsModule, ProductCardModule]
})
export class CategoryDetailPageModule {}
