import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TrackByFunction
} from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-info-component',
  templateUrl: './product-info-component.component.html',
  styleUrls: ['./product-info-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInfoComponent implements OnInit {
  @Input() product!: IProductCard;
  @Input() mainImg = '';

  public availability!: string;
  public images!: string[];
  public heart = false;
  public rating = 0;
  public numberImg!: number;

  public trackByFn: TrackByFunction<string> = (index, item) => item;

  ngOnInit(): void {
    this.init();
    this.numberImg = 0;
  }

  public changeImage(idx: number): void {
    this.mainImg = this.product.images[idx];
  }

  public like(): void {
    this.heart = !this.heart;
  }

  public arrowClickPlus(): void {
    if (this.numberImg < this.images.length - 1) {
      this.numberImg = this.numberImg + 1;
      this.mainImg = this.images[this.numberImg];
    } else {
      this.numberImg = 0;
      this.mainImg = this.images[this.numberImg];
    }
  }

  public arrowClickMinus(): void {
    if (this.numberImg > 0) {
      this.numberImg = this.numberImg - 1;
      this.mainImg = this.images[this.numberImg];
    } else {
      this.numberImg = this.images.length - 1;
      this.mainImg = this.images[this.numberImg];
    }
  }

  private init(): void {
    this.mainImg = this.product.images.find((el) => el !== '') || '';
    this.images = this.product.images.filter((el) => el !== '');
    this.availability = this.product.isExist
      ? 'Є в наявності'
      : 'Немає в наявності';
    this.rating = +this.product.rating;
    this.heart = this.product.isLiked;
  }
}
