import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent {
  public state: boolean | undefined;
  private number: number | undefined;
  public changeState(number: number): void {
    this.number = number;
    if (this.number === 1) {
      this.state = false;
    } else if (this.number === 2) {
      this.state = true;
    }
  }
}
