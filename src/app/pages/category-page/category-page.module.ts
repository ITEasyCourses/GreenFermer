import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from '../../core/enums/routes';
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
        path: ERoutes.DETAIL,
        component: CategoryDetailPageComponent
      },
      {
        path: '**',
        redirectTo: '/' + ERoutes.CATEGORY,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryPageModule {}
