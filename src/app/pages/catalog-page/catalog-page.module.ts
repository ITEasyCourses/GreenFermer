import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CatalogPageModule {}
