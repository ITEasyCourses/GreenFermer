import {
  ChangeDetectionStrategy,
  Component,
  TrackByFunction
} from '@angular/core';

import { CategoryDetailConst } from '../../core/constants/category-detail-page.constants';
import { IProductCard } from '../../core/interfaces/i-product-card';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent {
  public img = '../../../assets/images/category-page/fruits.png';
  public allProduct: IProductCard[] = CategoryDetailConst;

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.id;
}
