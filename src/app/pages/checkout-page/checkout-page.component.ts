import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent {
  public state = false;

  public changeState(state: boolean): void {
    this.state = state;
  }
}
