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
import { SortOption } from '../../../interfaces/sort-option';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseModalComponent implements OnInit {
  @Input() myKg = 0;
  @Input() myPrice!: string;
  public mockSortTypes: SortOption[] = sortPurchaseOptions;
  public totalPrice!: string;
  public productCards!: IProductCardBucket[];

  constructor(private dialogRef: MatDialogRef<PurchaseModalComponent>) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('purchase-modal');
    this.renderProductCardArr();
    this.getTotalWeight();
    this.getTotalPrice();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public countByDirection(event: {
    direction: number;
    productCard: IProductCardBucket;
  }): void {
    const uah = +this.totalPrice.split('.')[0];
    const cent = +this.totalPrice.split('.')[1];
    let numPrice = uah * 100 + cent;
    if (event.direction === 1) {
      this.myKg++;
      numPrice += this.getPriceOfCurrentCard(
        event.productCard.id,
        this.productCards
      );
      this.totalPrice = (numPrice / 100).toFixed(2);
    } else {
      this.myKg--;
      numPrice -= this.getPriceOfCurrentCard(
        event.productCard.id,
        this.productCards
      );
      this.totalPrice = (numPrice / 100).toFixed(2);
    }
  }

  private renderProductCardArr(): void {
    this.productCards = ProductCardBucketConstants;
  }

  private getTotalPrice(): void {
    this.totalPrice = (this.getPriceInCents() / 100).toFixed(2);
  }

  private getTotalWeight(): void {
    this.productCards.forEach(
      (el: IProductCardBucket) => (this.myKg += el.weight)
    );
  }

  private getPriceInCents(): number {
    let result = 0;
    this.productCards.forEach((el: IProductCardBucket) => {
      const uah = +el.price.split('.')[0];
      const cent = +el.price.split('.')[1];
      result += (uah * 100 + cent) * el.weight;
    });
    return result;
  }

  private getPriceOfCurrentCard(
    id: number,
    card: IProductCardBucket[]
  ): number {
    let price = '00.00';
    let numPrice = 0;
    card.filter((el: any) => {
      if (el.id === id) {
        price = el.price;
        const uah = +price.split('.')[0];
        const cent = +price.split('.')[1];
        numPrice = uah * 100 + cent;
      }
    });
    return numPrice;
  }
}
