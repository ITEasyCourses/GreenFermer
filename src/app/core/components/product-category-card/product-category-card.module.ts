import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCategoryCardComponent } from './product-category-card.component';

@NgModule({
  declarations: [ProductCategoryCardComponent],
  exports: [ProductCategoryCardComponent],
  imports: [CommonModule]
})
export class ProductCategoryCardModule {}
