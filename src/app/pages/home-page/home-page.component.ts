import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IProductCard } from '../../core/interfaces/i-product-card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  productList: IProductCard[] = [
    {
      name: 'Томат черрі',
      price: 23.01,
      image: ''
    },
    {
      name: 'Черешня рання',
      price: 23.01,
      image: ''
    },
    {
      name: 'Цибуля Марс',
      price: 23.01,
      image: ''
    },
    {
      name: 'Морква мита',
      price: 23.01,
      image: ''
    },
    {
      name: 'Слива Президент',
      price: 23.01,
      image: ''
    },
    {
      name: 'Томат черрі',
      price: 23.01,
      image: ''
    },
    {
      name: 'Черешня рання',
      price: 23.01,
      image: ''
    },
    {
      name: 'Цибуля Марс',
      price: 23.01,
      image: ''
    },
    {
      name: 'Морква мита',
      price: 23.01,
      image: ''
    },
    {
      name: 'Слива Президент',
      price: 23.01,
      image: ''
    }
  ];
}
