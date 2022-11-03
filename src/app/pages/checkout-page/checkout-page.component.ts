import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TotalPrice } from '../../core/abstracts/total-price';
import { PackagingOptions } from '../../core/constants/packaging-options';
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
  public options: SelectOption[] = PackagingOptions;

  public totalPrice = 0;
  public data: IProductCardBucket[] = [
    {
      id: 1,
      productName: 'Apple',
      img: '',
      price: '10.00',
      wholesalePrice: '10.00',
      weight: 1,
      startWholesaleByKg: 1,
      totalPrice: '10.00'
    },
    {
      id: 2,
      productName: 'Orange',
      img: '',
      price: '15.00',
      wholesalePrice: '15.00',
      weight: 1,
      startWholesaleByKg: 1,
      totalPrice: '15.00'
    }
  ];

  public ngOnInit(): void {
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
  }

  public changeState(state: boolean): void {
    this.state = state;
  }

  public selectedPackage(selectedOption: SelectOption): void {
    this.label = selectedOption.viewValue;
  }

  public onUpdateProductCard(card: IProductCardBucket): void {
    this.data.find((el, idx) => {
      if (el.id === card.id) {
        this.data[idx] = card;
      }
    });
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
  }

  public getCardId(index: number, name: any): number {
    return name.id;
  }
}
