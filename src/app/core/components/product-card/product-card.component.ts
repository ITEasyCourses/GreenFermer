import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Self
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCard } from '../../interfaces/i-product-card';
import { BucketService } from '../../services/bucket.service';
import { UnsubscribeService } from '../../services/unsubscribe.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class ProductCardComponent implements OnInit {
  @Input() card!: IProductCard;

  public heart = false;
  public basket = false;
  public img!: string | undefined;
  public isCategoryDetail = false;

  private categoryTypeId!: string;

  constructor(
    @Self() private unsubscribeService: UnsubscribeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private bucketService: BucketService
  ) {}

  public ngOnInit(): void {
    this.findImg();
    this.checkPage();
    this.checkBucket(this.card.id);
    this.reRenderBySubscribe();
  }

  public addToBasket(): void {
    this.basket = !this.basket;
    this.basket
      ? this.bucketService.addProductCard(this.card)
      : this.bucketService.removeFromBucket(this.card.id);
  }

  public like(): void {
    this.heart = !this.heart;
  }

  public goToCategoryDetails(): void {
    this.getCategoryTypeId();
    this.router.navigate([
      ERoutes.CATALOG_PAGE,
      this.card.categoryId || this.categoryTypeId,
      this.card.typeId
    ]);
  }

  public goToProductDetail(): void {
    this.getCategoryTypeId();
    this.router.navigate([
      ERoutes.CATALOG_PAGE,
      this.card.categoryId || this.categoryTypeId,
      this.card.typeId,
      this.card.id
    ]);
  }

  private findImg(): void {
    this.img = this.card.images.find((el) => el !== '');
  }

  private getCategoryTypeId(): void {
    this.categoryTypeId = this.activatedRoute.snapshot.params['categoryTypeId'];
  }

  private checkPage(): boolean {
    const typeId = this.activatedRoute.snapshot.params['categoryId'];
    return (this.isCategoryDetail = typeId === this.card.typeId);
  }

  private checkBucket(cardId: string): void {
    this.basket = this.bucketService.isInBucket(cardId);
  }

  private reRenderBySubscribe(): void {
    this.bucketService
      .reRender()
      .pipe(this.unsubscribeService.takeUntilDestroy)
      .subscribe(() => {
        this.checkBucket(this.card.id);
        this.cdr.detectChanges();
      });
  }
}
