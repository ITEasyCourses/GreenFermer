import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { PopularProductsConst } from '../../core/constants/catalog-page.constants';
import { ProductCategoryCard } from '../../core/constants/category-card.constants';
import { sortTypes } from '../../core/constants/sort-card-types-constants';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { IProductCategoryCard } from '../../core/interfaces/product-category-card.interface';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent {
  public cardsArr: IProductCard[] = PopularProductsConst;
  public categoryList: IProductCategoryCard[] = ProductCategoryCard;
  public mockSortTypes: SortOption[] = sortTypes;

  constructor(private router: Router) {}

  goToCatalog(card: IProductCategoryCard): void {
    this.router.navigate([`catalog/`, card.title]);
  }
}
