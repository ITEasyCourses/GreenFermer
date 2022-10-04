import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-product-purchase-card',
  templateUrl: './product-purchase-card.component.html',
  styleUrls: ['./product-purchase-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPurchaseCardComponent implements OnInit {
  @Input() productName!: string;
  @Input() price!: string;
  public counter = 1;
  public totalPrice!: string;

  public countPrice(operator: number): void {
    const uah = +this.price.split('.')[0];
    const cents = +this.price.split('.')[1];
    if (this.price) {
      if (operator === 0) {
        if (this.counter !== 1) {
          this.counter--;
        } else this.counter = 1;
      } else this.counter++;
      this.totalPrice = `${uah}.${cents}`;
    }
  }

  public ngOnInit(): void {
    this.totalPrice = this.price;
  }
}
