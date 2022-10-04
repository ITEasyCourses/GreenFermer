import { ChangeDetectionStrategy, Component } from '@angular/core';
import Swiper, { Navigation, A11y, SwiperOptions, Mousewheel } from 'swiper';

Swiper.use([Navigation, A11y, Mousewheel]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider_button_next',
      prevEl: '.slider_button_prev'
    },
    mousewheel: {
      sensitivity: 3
    }
  };

}
