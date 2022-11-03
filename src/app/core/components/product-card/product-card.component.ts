import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  @Input() card!: IProductCard;
  @Input() public isCategoryPage = false;
  public heart = false;

  constructor(private router: Router) {}

  public addToBasket(event: MouseEvent): void {
    event.stopPropagation();
    this.addToBasketEvent.emit();
  }

  public like(event: MouseEvent): void {
    event.stopPropagation();
    this.heart = !this.heart;
  }

  public roadToProductDetail(event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate([
      ERoutes.CATALOG_PAGE,
      ERoutes.CATEGORY,
      ERoutes.CATEGORY_ID,
      this.card.typeText
    ]);
  }

  public roadToCategoryDetail(event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate([
      ERoutes.CATALOG_PAGE,
      ERoutes.CATEGORY,
      this.card.id
    ]);
  }
}
