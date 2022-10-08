import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
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
  @Input() imgUrl!: string;
  @Input() productCard!: any;

  @Output() totalPriceInCents: EventEmitter<number> =
    new EventEmitter<number>();

  @Output() deleteCardEmitter: EventEmitter<any> = new EventEmitter<any>();
  public counter = 1;
  public totalPrice!: string;

  public countPrice(operator: number): void {
    const uah = +this.price.split('.')[0];
    const cent = +this.price.split('.')[1];
    if (this.price) {
      if (operator === 0) {
        if (this.counter !== 1) {
          this.counter--;
        } else this.counter = 1;
      } else if (this.counter === 1000) {
        this.counter = 1000;
      } else this.counter++;
      const result = (uah * 100 + cent) * this.counter;
      this.totalPrice = (result / 100).toFixed(2);
      this.totalPriceInCents.emit(result);
    }
  }

  public deleteCard(): void {
    this.deleteCardEmitter.emit(this.productCard);
  }

  public ngOnInit(): void {
    this.totalPrice = this.price;
  }
}
