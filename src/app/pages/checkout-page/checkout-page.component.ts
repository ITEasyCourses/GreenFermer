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
  public label = 'Картонне пакування';
  public options: SelectOption[] = [
    {
      viewValue: 'Картонне пакування',
      id: 1
    }
  ];

  public totalPrice = 0;
  public data: IProductCardBucket[] = [];

  static getTotalPrice(data: IProductCardBucket[]): number {
    return data.reduce((acc, el) => (acc += +el.totalPrice), 0);
  }

  public ngOnInit(): void {
    this.totalPrice = CheckoutPageComponent.getTotalPrice(this.data);
  }

  public changeState(state: boolean): void {
    this.state = state;
  }

  public selectedPackage(selectedOption: SelectOption): void {
    this.label = selectedOption.viewValue;
  }

  public onUpdateProductCard(card: IProductCardBucket): void {
    this.data.forEach((el, idx) => {
      if (el.id === card.id) {
        this.data[idx] = card;
      }
    });
    this.totalPrice = CheckoutPageComponent.getTotalPrice(this.data);
  }

  public getCardId(index: number, name: any): number {
    return name.id;
  }
}
