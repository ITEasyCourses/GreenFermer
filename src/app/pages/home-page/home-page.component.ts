import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Self,
  TrackByFunction
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IProductCard } from '../../core/interfaces/i-product-card';
import { IProductCategoryCard } from '../../core/interfaces/product-category-card.interface';
import { CategoryService } from '../../core/services/category.service';
import { PopularService } from '../../core/services/popular.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class HomePageComponent implements OnInit {
  public sliderList!: IProductCategoryCard[];
  public popularSubj: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public popProdSubj$ = this.popularSubj.asObservable();

  constructor(
    private categoryService: CategoryService,
    @Self() private unsubscribeService: UnsubscribeService,
    private cdr: ChangeDetectorRef,
    private popularService: PopularService
  ) {}

  public trackByFn: TrackByFunction<IProductCard> = (index, item) => item.id;

  public ngOnInit(): void {
    this.getProductCategoryCards();
    this.getPopularsCards();
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

  private getPopularsCards(): void {
    this.popularService
      .getPopulars()
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe((data: IProductCard[]) => {
        this.popularSubj.next(data);
        console.log('this.popProdSubj$', this.popProdSubj$);
        this.cdr.detectChanges();
      });
  }
}
