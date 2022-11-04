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
  public data: IProductCardBucket[] = [];

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
    this.data = this.data.map((el) => (el.id === card.id ? card : el));
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
  }

  public getCardId(index: number, name: any): number {
    return name.id;
  }
}
