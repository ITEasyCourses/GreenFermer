import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import SwiperCore, {
  Navigation,
  A11y,
  Mousewheel,
  SwiperOptions
} from 'swiper';

SwiperCore.use([Navigation, A11y, Mousewheel]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Input() categoriesList!: any[];

  @Output() changeCategori: EventEmitter<any> = new EventEmitter<any>();

  config: SwiperOptions = {
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

  public sergey: any[] = [
    {
      number: 1,
      text: 'abc'
    },
    {
      number: 2,
      text: 'qwe'
    },
    {
      number: 3,
      text: 'asd'
    },
    {
      number: 4,
      text: 'vfd'
    },
    {
      number: 5,
      text: 'ttt'
    },
    {
      number: 6,
      text: 'yte'
    },
    {
      number: 7,
      text: 'sgrs'
    },
    {
      number: 8,
      text: '9av'
    },
    {
      number: 9,
      text: 'nsrt'
    },
    {
      number: 10,
      text: 'abcavva'
    },
    {
      number: 11,
      text: 'avvarc'
    },
    {
      number: 12,
      text: 'pppp'
    }
  ];
}
