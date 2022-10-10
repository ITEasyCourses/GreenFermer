import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ProductCardConstants } from '../../core/constants/product-card.constants';
import {
  CATEGORIES,
  LABEL_SELECT
} from '../../core/constants/select.constants';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { SortOption } from '../../core/interfaces/sort-option';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent implements OnInit {
  allProduct: IProductCard[] = ProductCardConstants;
  public labelForSelectKatalog!: string;
  public mocListForOptionSelect!: SortOption[];

  public ngOnInit(): void {
    this.labelForSelectKatalog = LABEL_SELECT.CATALOG;
    this.mocListForOptionSelect = CATEGORIES;
  }
}
