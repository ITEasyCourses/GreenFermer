import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-catalog-page-second-block',
  templateUrl: './catalog-page-second-block.component.html',
  styleUrls: ['./catalog-page-second-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageSecondBlockComponent {
  public cardsArr!: IProductCard[];
}
