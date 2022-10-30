import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SelectOption } from '../../core/interfaces/delivery-type';
import { IProductCardBucket } from '../../core/interfaces/product-card-bucket.interface';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent implements OnInit {
  public state = false;
  public label!: string;
  public options: SelectOption[] = [
    {
      viewValue: 'Картонне пакування',
      id: 1
    }
  ];

  public totalPrice = 0;
  public data: IProductCardBucket[] = [];

  public ngOnInit(): void {
    this.getTotalPrice();
  }

  public changeState(state: boolean): void {
    this.state = state;
  }

  public selectedPackage(selectedOption: SelectOption): void {
    this.label = selectedOption.viewValue;
  }

  public onUpdateProductCard(card: IProductCardBucket): void {
    this.data = this.data.map((el) => {
      if (card.id === el.id) {
        el = Object.assign({}, card);
      }
      return el;
    });
    this.getTotalPrice();
  }

  public getCardId(index: number, name: any): number {
    return name.id;
  }

  private getTotalPrice(): void {
    this.totalPrice = this.data.reduce((acc, el) => (acc += +el.totalPrice), 0);
  }
}
