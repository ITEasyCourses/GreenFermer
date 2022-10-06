import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import SwiperCore, { Navigation, A11y, Mousewheel } from 'swiper';

SwiperCore.use([Navigation, A11y, Mousewheel]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Input() categoriesList!: any[];

  public test: any[] = [
    {
      number: 1
    },
    {
      number: 2
    },
    {
      number: 3
    },
    {
      number: 4
    },
    {
      number: 5
    },
    {
      number: 6
    },
    {
      number: 7
    },
    {
      number: 8
    }
  ];

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
