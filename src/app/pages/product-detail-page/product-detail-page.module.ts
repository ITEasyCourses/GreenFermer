import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackModule } from '../../core/components/feedback/feedback.module';

import { ProductDetailPageComponent } from './product-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPageComponent
  }
];

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FeedbackModule]
})
export class ProductDetailPageModule {}
