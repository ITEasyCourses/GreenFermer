import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterModule } from '../../core/components/footer/footer.module';
import { HeaderComponentModule } from '../../core/components/header-component/header-component.module';
import { ProductCardModule } from '../../core/components/product-card/product-card.module';
import { SearchModule } from '../../core/components/search/search.module';
import { SelectModule } from '../../core/components/select/select.module';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponentModule,
    SearchModule,
    SelectModule,
    ProductCardModule,
    FooterModule
  ]
})
export class CategoryPageModule {}
