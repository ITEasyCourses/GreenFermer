import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  OnInit,
  Self
} from '@angular/core';

import { ProductCardConstants } from '../../core/constants/product-card.constants';
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
  productList: IProductCard[] = ProductCardConstants;
  sliderList!: IProductCategoryCard[];

  constructor(
    private categoryService: CategoryService,
    @Self() private unsubscribeService: UnsubscribeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
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
