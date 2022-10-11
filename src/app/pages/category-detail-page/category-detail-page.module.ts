import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryDetailPageComponent } from './category-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailPageComponent
  }
];

@NgModule({
  declarations: [CategoryDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryDetailPageModule {}
