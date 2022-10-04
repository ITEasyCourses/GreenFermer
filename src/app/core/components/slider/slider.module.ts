import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight } from 'angular-feather/icons';
import { SwiperModule } from 'swiper/angular';

import { SliderComponent } from './slider.component';

const icons = {
  ChevronLeft,
  ChevronRight
};

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [SwiperModule, FeatherModule.pick(icons)]
})
export class SliderModule {}
