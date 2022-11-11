import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TrackByFunction
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PRODUCT_PURCHASE } from '../../core/constants/product-purchase';
import { Feedback } from '../../core/interfaces/feedback-interface';
import { IProductCard } from '../../core/interfaces/i-product-card';
import { ProductPurchase } from '../../core/interfaces/product-purchase.interface';
import { SortOption } from '../../core/interfaces/sort-option';
import { ProductDetailService } from '../../core/services/product-detail.service';
import { UnsubscribeService } from '../../core/services/unsubscribe.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class ProductDetailPageComponent implements OnInit {
  public product$!: Observable<IProductCard>;
  public cards!: IProductCard[];
  public mockSortTypes!: SortOption[];

  public productPurchase: ProductPurchase = PRODUCT_PURCHASE;

  constructor(
    private productDetailService: ProductDetailService,
    private activatedRoute: ActivatedRoute,
    private unsubscribeService: UnsubscribeService
  ) {}

  public trackByFn: TrackByFunction<Feedback> = (index, item) => item.name;

  ngOnInit() {
    this.getProduct();
  }

  private getProduct(): void {
    const categoryId = this.activatedRoute.snapshot.params['categoryTypeId'];
    const productId = this.activatedRoute.snapshot.params['product-detail'];

    this.product$ = this.productDetailService
      .getProduct(categoryId, productId)
      .pipe(this.unsubscribeService.takeUntilDestroy);

  }
}
