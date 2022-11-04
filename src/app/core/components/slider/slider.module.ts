import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { SwiperModule } from 'swiper/angular';

import { ProductCategoryCardModule } from '../product-category-card/product-category-card.module';

import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    SwiperModule,
    CommonModule,
    ProductCategoryCardModule,
    IconSpriteModule
  ]
})
export class SliderModule {}
