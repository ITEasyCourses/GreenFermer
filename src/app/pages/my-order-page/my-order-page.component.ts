import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-my-order-page',
  templateUrl: './my-order-page.component.html',
  styleUrls: ['./my-order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrderPageComponent {
  public tittle!: string;
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
