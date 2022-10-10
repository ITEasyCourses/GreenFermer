import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IOrderCardFields } from '../../core/interfaces/i-order-card-fields';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-my-order-page',
  templateUrl: './my-order-page.component.html',
  styleUrls: ['./my-order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrderPageComponent {
  public tittle = 'asdadadsf';
  public mocCads: IOrderCardFields[] = [
    {
      isDane: true,
      ordersNumber: 2,
      dayOfOder: '02.03',
      cityFromOder: 'Kyiv',
      cityToOder: 'Mlt',
      orderAddedProducts: [
        {
          productName: 'Sheet',
          productPrice: 223,
          productAmount: 3,
          productSum: 450
        }
      ],
      sumOderProducts: 222,
      id: 3
    },
    {
      isDane: false,
      ordersNumber: 2,
      dayOfOder: '02.03',
      cityFromOder: 'Kyiv',
      cityToOder: 'Mlt',
      orderAddedProducts: [
        {
          productName: 'Sheet',
          productPrice: 223,
          productAmount: 3,
          productSum: 450
        }
      ],
      sumOderProducts: 222,
      id: 3
    },
    {
      isDane: true,
      ordersNumber: 2,
      dayOfOder: '02.03',
      cityFromOder: 'Lviv',
      cityToOder: 'Borschaha',
      orderAddedProducts: [
        {
          productName: 'Pizda',
          productPrice: 223,
          productAmount: 3,
          productSum: 450
        }
      ],
      sumOderProducts: 222,
      id: 3
    }
  ];

  public options: SortOption[] = [
    {
      value: 'Status',
      viewValue: 'status'
    },
    {
      value: 'City',
      viewValue: 'city'
    },
    {
      value: 'Price',
      viewValue: 'price'
    }
  ];

  constructor() {}
}
