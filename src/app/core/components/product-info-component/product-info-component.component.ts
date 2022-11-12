import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TrackByFunction
} from '@angular/core';

import { PRODUCT_INFO_CARD } from '../../constants/product-info-component.constants';
import { ProductInfo } from '../../interfaces/product-info-component-interface';

@Component({
  selector: 'app-product-info-component',
  templateUrl: './product-info-component.component.html',
  styleUrls: ['./product-info-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInfoComponent implements OnInit {
  @Input() product: ProductInfo = PRODUCT_INFO_CARD;
  @Input() mainImg!: string;

  public availability!: string;
  public heart = false;
  public numberImg!: number;

  private counter = 0;
  public trackByFn: TrackByFunction<string> = (index, item) => item;

  public changeImage(idx: number): void {
    this.mainImg = this.product.img[idx];
  }

  public ngOnInit() {
    this.numberImg = 0;
    this.mainImg = this.product.img[this.numberImg];
    this.availability = this.product.availability
      ? 'Немає в наявності'
      : 'Є в наявності';
  }

  public like(): void {
    this.heart = !this.heart;
  }

  arrowClickPlus() {
    if (this.numberImg < this.product.img.length - 1) {
      this.numberImg = this.numberImg + 1;
      this.mainImg = this.product.img[this.numberImg];
    } else {
      this.numberImg = 0;
      this.mainImg = this.product.img[this.numberImg];
    }
  }

  arrowClickMinus() {
    if (this.numberImg > 0) {
      this.numberImg = this.numberImg - 1;
      this.mainImg = this.product.img[this.numberImg];
    } else {
      this.numberImg = this.product.img.length - 1;
      this.mainImg = this.product.img[this.numberImg];
    }
  }
}
