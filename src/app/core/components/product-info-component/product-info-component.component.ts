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
  public heart = false;
  public rating = 0;
  private counter = 0;

  public trackByFn: TrackByFunction<string> = (index, item) => item;

  ngOnInit(): void {
    this.mainImg = this.product.images.splice(0, 1)[0];
    this.init();
  }

  public changeImage(img: string, idx: number): void {
    this.product.images.splice(idx, 1, this.mainImg);
    [this.mainImg, this.counter] = [img, idx];
  }

  public like(): void {
    this.heart = !this.heart;
  }

  public arrowClick(direction: number) {
    const containImg = this.mainImg;
    if (!direction) {
      if (this.counter === 0) {
        this.counter = 3;
      } else this.counter--;
    } else {
      if (this.counter === 3) {
        this.counter = 0;
      } else this.counter++;
    }
    this.mainImg = this.product.images[this.counter];
    this.product.images.splice(this.counter, 1, containImg);
  }

  private init(): void {
    this.availability = this.product.isExist
      ? 'Є в наявності'
      : 'Немає в наявності';
    this.rating = +this.product.rating;
    this.heart = this.product.isLiked;
  }
}
