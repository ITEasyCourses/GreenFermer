import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryPageComponent } from './category-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageComponent
  }
];

@NgModule({
  declarations: [CategoryPageComponent],
  exports: [CategoryPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryPageModule {}
