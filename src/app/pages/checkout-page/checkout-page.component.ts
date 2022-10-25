import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SelectOption } from '../../core/interfaces/delivery-type';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent {
  public state = false;
  public label!: string;
  public totalPrice!: string;

  public changeState(state: boolean): void {
    this.state = state;
  }

  public selectedPackage(selectedOption: SelectOption): void {
    this.label = selectedOption.viewValue;
  }
}
