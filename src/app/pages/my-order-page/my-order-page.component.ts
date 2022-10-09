import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-order-page',
  templateUrl: './my-order-page.component.html',
  styleUrls: ['./my-order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrderPageComponent {
  constructor() {}
}
