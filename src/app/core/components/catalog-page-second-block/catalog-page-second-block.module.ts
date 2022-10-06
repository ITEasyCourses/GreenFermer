import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '../product-card/product-card.module';

import { CatalogPageSecondBlockComponent } from './catalog-page-second-block.component';

@NgModule({
  declarations: [CatalogPageSecondBlockComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [CatalogPageSecondBlockComponent]
})
export class CatalogPageSecondBlockModule {}
