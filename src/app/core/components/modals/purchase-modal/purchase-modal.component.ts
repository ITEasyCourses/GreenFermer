import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { sortPurchaseOptions } from '../../../constants/sort-purchase-options';
import { ERoutes } from '../../../enums/routes';
import { IProductCardBucket } from '../../../interfaces/product-card-bucket.interface';
import { SortOption } from '../../../interfaces/sort-option';
import { BucketService } from '../../../services/bucket.service';
import { BucketCardArgType } from '../../../types/application-types';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseModalComponent implements OnInit {
  @Input() totalWeight = 0;

  public productCards: IProductCardBucket[] = [];
  public mockSortTypes: SortOption[] = sortPurchaseOptions;
  public totalPrice!: string;

  constructor(
    private dialogRef: MatDialogRef<PurchaseModalComponent>,
    private router: Router,
    private bucketService: BucketService
  ) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('purchase-modal');
    this.productCards = this.bucketService.getCurrentSessionBucket();
    this.initializeData();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public countByDirection(receivedData: IProductCardBucket): void {
    this.setNewProductCards(receivedData);
    this.bucketService.updateGoodsInLocalStorage(this.productCards);
    this.getTotalPrice();
  }

  public trackByFn(index: number, card: IProductCardBucket) {
    return card.id;
  }

  public goToCheckout(): void {
    this.router.navigate([ERoutes.CHECKOUT]);
    this.dialogRef.close();
  }

  public deleteCard(card: IProductCardBucket): void {
    this.productCards = this.productCards.filter((el) => el.id !== card.id);
    this.getTotalPrice();
  }

  private getTotalPrice(): void {
    let result = 0;
    let weight = 0;
    this.productCards.forEach((el: IProductCardBucket) => {
      if (+el.totalPrice) {
        result += this.getConvertStrPriseToNum(el, 'totalPrice');
      } else if (el.weight < el.startWholesaleByKg) {
        result += this.getConvertStrPriseToNum(el, 'price') * el.weight;
      } else {
        result +=
          this.getConvertStrPriseToNum(el, 'wholesalePrice') * el.weight;
      }
      weight += el.weight;
    });
    this.totalPrice = (result / 100).toFixed(2);
    this.totalWeight = weight;
  }

  private getConvertStrPriseToNum(
    el: IProductCardBucket,
    type: BucketCardArgType
  ): number {
    const uah = +el[type].split('.')[0];
    const cent = +el[type].split('.')[1];
    return uah * 100 + cent;
  }

  private initializeData(): void {
    this.getTotalPrice();
  }

  private setNewProductCards(data: IProductCardBucket): void {
    this.productCards = this.productCards.map((el: IProductCardBucket) => {
      return el.id === data.id
        ? {
            ...el,
            weight: data.weight,
            totalPrice: data.totalPrice
          }
        : el;
    });
  }
}
