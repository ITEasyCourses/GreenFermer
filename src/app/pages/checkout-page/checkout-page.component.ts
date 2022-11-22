import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TotalPrice } from '../../core/abstracts/total-price';
import { PackagingOptions } from '../../core/constants/packaging-options';
import { SelectOption } from '../../core/interfaces/delivery-type';
import { IProductCardBucket } from '../../core/interfaces/product-card-bucket.interface';
import { BucketService } from '../../core/services/bucket.service';
import { BucketCardArgType } from '../../core/types/application-types';

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

  public totalPrice!: number;
  public totalPriceStr!: string;
  public data: IProductCardBucket[] = [];
  public statusEdit = false;
  public productQuantity!: number;
  public packageCost!: number;
  public deliveryCost!: number;

  constructor(private bucketService: BucketService) {}

  public ngOnInit(): void {
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
    this.data = this.bucketService.getCurrentSessionBucket();
    this.productQuantity = this.data.length;
    this.getTotalPrice();
  }

  public changeState(state: boolean): void {
    this.state = state;
  }

  public selectedPackage(selectedOption: SelectOption): void {
    this.label = selectedOption.viewValue;
    this.packageCost = 20;
  }

  public onUpdateProductCard(card: IProductCardBucket): void {
    this.data = this.data.map((el) => (el.id === card.id ? card : el));
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
  }

  public getCardId(index: number, name: any): number {
    return name.id;
  }

  public editOrder(): void {
    this.statusEdit = true;
  }

  public confirmOrder(): void {
    this.countByDirection();
    this.statusEdit = false;
  }

  public deleteCard(card: IProductCardBucket): void {
    this.data = this.data.filter((el) => el.id !== card.id);
    this.totalPrice = TotalPrice.getTotalPrice(this.data);
    this.productQuantity = this.data.length;
  }

  public deliveryDetailObj(event: any): void {
    event.deliveryType !== 'self'
      ? (this.deliveryCost = 40)
      : (this.deliveryCost = 0);
  }

  public countByDirection(): void {
    this.bucketService.updateGoodsInLocalStorage(this.data);
    this.getTotalPrice();
  }

  public cancelChanges(): void {
    this.totalPrice = JSON.parse(this.totalPriceStr);
    this.data = this.bucketService.getCurrentSessionBucket();
    this.statusEdit = false;
  }

  private getTotalPrice(): void {
    let result = 0;
    this.data.forEach((el: IProductCardBucket) => {
      if (+el.totalPrice) {
        result += this.getConvertStrPriseToNum(el, 'totalPrice');
      } else if (el.weight < el.startWholesaleByKg) {
        result += this.getConvertStrPriseToNum(el, 'price') * el.weight;
      } else {
        result +=
          this.getConvertStrPriseToNum(el, 'wholesalePrice') * el.weight;
      }
    });
    this.totalPriceStr = (result / 100).toFixed(2);
  }

  private getConvertStrPriseToNum(
    el: IProductCardBucket,
    type: BucketCardArgType
  ): number {
    const uah = +el[type].split('.')[0];
    const cent = +el[type].split('.')[1];
    return uah * 100 + cent;
  }
}
