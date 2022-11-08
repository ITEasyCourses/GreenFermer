import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  @Input() card!: IProductCard;
  public heart = false;
  public img!: string | undefined;
  private categoryTypeId!: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.findImg();
  }

  public addToBasket(): void {
    this.addToBasketEvent.emit();
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
}
