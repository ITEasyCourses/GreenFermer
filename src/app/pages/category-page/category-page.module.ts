import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from '../../core/enums/routes';

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
        component: CategoryPageComponent
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
