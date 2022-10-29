import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight, Heart } from 'angular-feather/icons';

import { RatingComponentModule } from '../rating-component/rating-component.module';

import { ProductInfoComponent } from './product-info-component.component';

const icons = {
  Heart,
  ChevronLeft,
  ChevronRight
};

@NgModule({
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    RatingComponentModule,
    FormsModule
  ]
})
export class ProductInfoModule {}
