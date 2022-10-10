import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryDetailPageComponent } from '../category-detail-page/category-detail-page.component';

import { CategoryPageComponent } from './category-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CategoryPageComponent
      },
      {
        path: 'detail',
        component: CategoryDetailPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryPageModule {}
