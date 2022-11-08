import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TrackByFunction
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs';

import { sortMapOptions } from '../../core/constants/sort-map-options';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { SortOption } from '../../core/interfaces/sort-option';
import { CategoryService } from '../../core/services/category.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class CategoryDetailPageComponent implements OnInit {
  @Input() products!: IProductCard[];

  public mockSortTypes: SortOption[] = sortMapOptions;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private unsubscribeService: UnsubscribeService
  ) {}

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.id;

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    const categoryId = this.activatedRoute.snapshot.params['categoryTypeId'];
    const typeId = this.activatedRoute.snapshot.params['categoryId'];
    this.categoryService
      .getCategoryDetail(categoryId, typeId)
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data) => {
        this.products = data;
        this.cdr.detectChanges();
      });
  }
}
