import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartColorsType } from '../../types/application-types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @Input() counter = 6;
  @Input() color: CartColorsType = 'yellow';
}
