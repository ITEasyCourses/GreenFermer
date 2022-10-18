import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CheckoutResultHelper } from '../../core/helpers/checkout-result.helper';

@Component({
  selector: 'app-checkout-result-page',
  templateUrl: './checkout-result-page.component.html',
  styleUrls: ['./checkout-result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutResultPageComponent extends CheckoutResultHelper {}
