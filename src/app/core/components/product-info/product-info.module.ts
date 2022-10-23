import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight, Heart } from 'angular-feather/icons';

import { RatingComponentModule } from '../rating-component/rating-component.module';

import { ProductInfoComponent } from './product-info.component';

const icons = {
  Heart,
  ChevronLeft,
  ChevronRight
};

@NgModule({
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent],
  imports: [CommonModule, FeatherModule.pick(icons), RatingComponentModule]
})
export class ProductInfoModule {}
