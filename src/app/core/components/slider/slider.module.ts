import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [SwiperModule]
})
export class SliderModule {}
