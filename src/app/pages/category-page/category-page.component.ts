import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TrackByFunction
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProductCard } from '../../core/interfaces/i-product-card';
import { CategoryService } from '../../core/services/category.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class CategoryPageComponent implements OnInit {
  public img = '';
  public allProduct!: IProductCard[];
  public id!: string;
  constructor(
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef,
    private unsubscribeService: UnsubscribeService,
    private activatedRoute: ActivatedRoute
  ) {}

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.id;

  ngOnInit() {
    this.getCategoryId();
    this.getProductCategory();
    this.getProducts();
  }

  private getProductCategory(): void {
    this.categoryService
      .getCategoryInfo(this.id)
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data) => {
        this.img = data.cover;
        this.cdr.detectChanges();
      });
  }

  private getProducts(): void {
    this.categoryService
      .getCategoryProducts(this.id)
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data) => {
        this.allProduct = data;
        this.cdr.detectChanges();
      });
  }

  private getCategoryId(): void {
    this.id = this.activatedRoute.snapshot.params['categoryTypeId'];
  }
}
