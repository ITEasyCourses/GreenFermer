import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Self,
  TrackByFunction
} from '@angular/core';

import { sortTypes } from '../../core/constants/sort-card-types-constants';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { IProductCategoryCard } from '../../core/interfaces/product-category-card.interface';
import { SortOption } from '../../core/interfaces/sort-option';
import { CategoryService } from '../../core/services/category.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class CatalogPageComponent implements OnInit {
  public cardsArr!: IProductCard[];
  public categoryList!: IProductCategoryCard[];
  public mockSortTypes: SortOption[] = sortTypes;

  constructor(
    private categoryService: CategoryService,
    @Self() private unsubscribeService: UnsubscribeService,
    private cdr: ChangeDetectorRef
  ) {}

  public trackByFn: TrackByFunction<IProductCategoryCard> = (index, item) =>
    item.id;

  public trackByCardsFn: TrackByFunction<IProductCard> = (index, item) =>
    item.id;

  ngOnInit() {
    this.getProductCategoryCards();
  }

  private getProductCategoryCards(): void {
    this.categoryService
      .getCategory()
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data: IProductCategoryCard[]) => {
        this.categoryList = data;
        this.cdr.detectChanges();
      });
  }
}
