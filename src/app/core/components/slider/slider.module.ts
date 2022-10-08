import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight } from 'angular-feather/icons';
import { SwiperModule } from 'swiper/angular';

import { ProductCategoryCardModule } from '../product-category-card/product-category-card.module';

import { SliderComponent } from './slider.component';

const icons = {
  ChevronLeft,
  ChevronRight
};

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    SwiperModule,
    FeatherModule.pick(icons),
    CommonModule,
    ProductCategoryCardModule
  ]
})
export class SliderModule {}
