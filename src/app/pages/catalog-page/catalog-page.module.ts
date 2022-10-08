import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';

import { CatalogPageComponent } from './catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent,
    data: {
      breadcrumb: 'Каталог'
    }
  }
];

@NgModule({
  declarations: [CatalogPageComponent],
  exports: [CatalogPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BreadcrumbsModule]
})
export class CatalogPageModule {}
