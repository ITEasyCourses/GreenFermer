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

  private counter = 0;
  public trackByFn: TrackByFunction<string> = (index, item) => item;

  public changeImage(img: string, idx: number): void {
    this.product.img.splice(idx, 1, this.mainImg);
    [this.mainImg, this.counter] = [img, idx];
  }

  public ngOnInit() {
    this.mainImg = this.product.img.splice(0, 1)[0];
    this.availability = this.product.availability
      ? 'Немає в наявності'
      : 'Є в наявності';
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
    this.mainImg = this.product.img[this.counter];
    this.product.img.splice(this.counter, 1, containImg);
  }
}
