import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import SwiperCore, { Navigation, A11y, Mousewheel } from 'swiper';

import { IProductCategoryCard } from '../../interfaces/product-category-card.interface';

SwiperCore.use([Navigation, A11y, Mousewheel]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Input() categoriesList!: IProductCategoryCard[];

  config: any = {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider_button_next',
      prevEl: '.slider_button_prev'
    },
    mousewheel: {
      sensitivity: 3
    },
    loop: true,
    speed: 500,
    slidesPerGroup: 2
  };
}
