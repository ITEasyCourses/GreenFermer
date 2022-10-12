import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbsModule {}
