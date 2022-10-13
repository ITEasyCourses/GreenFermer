import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ORDERS } from '../../core/constants/oder-card-moc-arr.constants';
import { ORDER_PAGE_SELECT } from '../../core/constants/select.constants';
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

  public options: SortOption[] = ORDER_PAGE_SELECT;

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
