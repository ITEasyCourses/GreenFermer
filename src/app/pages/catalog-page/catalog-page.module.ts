import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardModule } from '../../core/components/product-card/product-card.module';

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
  imports: [CommonModule, RouterModule.forChild(routes), ProductCardModule]
})
export class CatalogPageModule {}
