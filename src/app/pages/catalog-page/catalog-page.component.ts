import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PopularProductsConst } from '../../core/constants/catalog-page.constants';
import { IProductCard } from '../../core/interfaces/i-product-card';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent {
  public cardsArr: IProductCard[] = PopularProductsConst;
}
