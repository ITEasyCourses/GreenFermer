import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductCategoryCard } from '../../core/constants/category-card.constants';
import { ProductCategoryCardInterface } from '../../core/interfaces/product-category-card.interface';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent {
  categoryList: ProductCategoryCardInterface[] | undefined =
    ProductCategoryCard;

  public mockSortTypes: SortOption[] = [
    { value: 'fruits', viewValue: 'Фруткты' },
    { value: 'vegetables', viewValue: 'Овощи' },
    { value: 'all', viewValue: 'Всё' }
  ];
}
