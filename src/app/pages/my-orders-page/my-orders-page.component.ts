import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrdersPageComponent {}
