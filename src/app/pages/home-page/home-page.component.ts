import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Self,
  TrackByFunction
} from '@angular/core';

import { IProductCard } from '../../core/interfaces/i-product-card';
import { IProductCategoryCard } from '../../core/interfaces/product-category-card.interface';
import { CategoryService } from '../../core/services/category.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class HomePageComponent implements OnInit {
  public productList!: IProductCard[];
  public sliderList!: IProductCategoryCard[];

  constructor(
    private categoryService: CategoryService,
    @Self() private unsubscribeService: UnsubscribeService,
    private cdr: ChangeDetectorRef
  ) {}

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.title;

  public ngOnInit(): void {
    this.getProductCategoryCards();
  }

  private getProductCategoryCards(): void {
    this.categoryService
      .getCategory()
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data: IProductCategoryCard[]) => {
        this.sliderList = data;
        this.cdr.detectChanges();
      });
  }
}
