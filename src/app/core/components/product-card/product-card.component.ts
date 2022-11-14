import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input, OnChanges,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCard } from '../../interfaces/i-product-card';
import { BucketService } from '../../services/bucket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() card!: IProductCard;

  public heart = false;
  public basket = false;
  public img!: string | undefined;
  public isCategoryDetail = false;

  private categoryTypeId!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private bucketService: BucketService
  ) {}

  public ngOnInit(): void {
    this.findImg();
    this.checkPage();
    this.checkBucket(this.card.id);
    this.test();
    this.cdr.detectChanges();
  }

  public ngOnChanges(): void {

  }

  public addToBasket(): void {
    this.basket = !this.basket;
    this.basket
      ? this.bucketService.addCardFromPurchase(this.card)
      : this.bucketService.removeFromBasket(this.card.id);
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
    this.bucketService.isInBucketTest(cardId);
  }

  private test(): void {
    this.bucketService.testFlag().subscribe((data) => {
      this.basket = data;
    });
  }
}
