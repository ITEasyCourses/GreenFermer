import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ORDERS } from '../../core/constants/oder-card-moc-arr.constants';
import { IOrderCardFields } from '../../core/interfaces/i-order-card-fields';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-my-order-page',
  templateUrl: './my-order-page.component.html',
  styleUrls: ['./my-order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrderPageComponent {
  public tittle = 'Мои заказы';
  public mocCads: IOrderCardFields[] = ORDERS;

  public options: SortOption[] = [
    {
      value: 'isDane',
      viewValue: 'Статус ОБР'
    },
    {
      value: '!isDane',
      viewValue: 'Статус ВИК'
    },
    {
      value: 'cityFromOder',
      viewValue: 'Місто А-Я'
    },
    {
      value: '!cityFromOder',
      viewValue: 'Місто Я-А'
    },
    {
      value: 'sumOderProducts',
      viewValue: 'Сума +'
    },
    {
      value: '!sumOderProducts',
      viewValue: 'Сума -'
    }
  ];

  constructor() {}

  public sortBy(type: string): void {
    const reverseSort = !!type.match('!');
    const formatType = type.replace('!', '');
    this.mocCads.sort((a: any, b: any) => {
      if (a[formatType] < b[formatType]) {
        if (reverseSort) {
          return 1;
        }
        return -1;
      } else {
        if (reverseSort) {
          return -1;
        }
        return 1;
      }
    });
  }
}
