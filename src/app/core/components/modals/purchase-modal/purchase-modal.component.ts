import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ProductCardBucketConstants } from '../../../constants/product-card-bucket.constants';
import { sortPurchaseOptions } from '../../../constants/sort-purchase-options';
import { IProductCardBucket } from '../../../interfaces/product-card-bucket.interface';
import { PurchasePayloadEmitter } from '../../../interfaces/purchase-payload-emitter';
import { SortOption } from '../../../interfaces/sort-option';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseModalComponent implements OnInit {
  @Input() totalWeight = 0;
  @Input() myPrice!: string;

  public mockSortTypes: SortOption[] = sortPurchaseOptions;
  public totalPrice!: string;
  public productCards: IProductCardBucket[] = ProductCardBucketConstants;

  constructor(private dialogRef: MatDialogRef<PurchaseModalComponent>) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('purchase-modal');
    this.initializeData();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public countByDirection(receivedData: PurchasePayloadEmitter): void {
    const uah = +this.totalPrice.split('.')[0];
    const cent = +this.totalPrice.split('.')[1];
    const priceOfCurrentCard = this.getPriceOfCurrentCard(
      receivedData.productCard.id,
      this.productCards
    );
    let numPrice = uah * 100 + cent;
    if (receivedData.direction === 1) {
      this.totalWeight++;
      numPrice += priceOfCurrentCard;
    } else {
      this.totalWeight--;
      numPrice -= priceOfCurrentCard;
    }
    this.totalPrice = (numPrice / 100).toFixed(2);
  }

  public trackByFn(index: number, cards: IProductCardBucket) {
    return cards.id;
  }

  private getTotalWeight(): void {
    this.productCards.forEach(
      (el: IProductCardBucket) => (this.totalWeight += el.weight)
    );
  }

  private getPriceInCents(): void {
    let result = 0;
    this.productCards.forEach((el: IProductCardBucket) => {
      const uah = +el.price.split('.')[0];
      const cent = +el.price.split('.')[1];
      result += (uah * 100 + cent) * el.weight;
    });
    this.totalPrice = (result / 100).toFixed(2);
  }

  private getPriceOfCurrentCard(
    id: number,
    card: IProductCardBucket[]
  ): number {
    let numPrice = 0;
    card.forEach((el: IProductCardBucket) => {
      if (el.id === id) {
        const uah = +el.price.split('.')[0];
        const cent = +el.price.split('.')[1];
        numPrice = uah * 100 + cent;
      }
    });
    return numPrice;
  }

  private initializeData(): void {
    this.getTotalWeight();
    this.getPriceInCents();
  }
}
