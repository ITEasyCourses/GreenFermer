import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  DELIVERY_DATE,
  EMAIL_ADMIN,
  ORDER,
  PHONE_ADMIN
} from '../../core/constants/checkout-result.constants';

@Component({
  selector: 'app-checkout-result-page',
  templateUrl: './checkout-result-page.component.html',
  styleUrls: ['./checkout-result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutResultPageComponent {
  public order = ORDER;
  public deliveryDate = DELIVERY_DATE;
  public emailAdmin = EMAIL_ADMIN;
  public phoneAdmin = PHONE_ADMIN;
  public buttonTextContinue = 'Повернутись до покупок';
  public buttonTextOrder = 'Подивитися моє замовлення';
}
