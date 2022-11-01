import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';
import { FeedbackModule } from '../../core/components/feedback/feedback.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SortSelectModule } from '../../core/components/sort-select/sort-select.module';

import { ProductDetailPageComponent } from './product-detail-page.component';
import { ProductInfoModule } from '../../core/components/product-info-component/product-info-component.module';
import { ProductPurchaseModule } from '../../core/components/product-purchase/product-purchase.module';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPageComponent,
    data: {
      breadcrumb: 'Product name'
    }
  }
];

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule,
    SortSelectModule,
    BreadcrumbsModule,
    FeedbackModule,
    ProductInfoModule,
    ProductPurchaseModule
  ]
})
export class ProductDetailPageModule {}
