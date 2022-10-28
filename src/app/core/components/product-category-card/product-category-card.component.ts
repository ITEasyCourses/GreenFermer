import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCategoryCard } from '../../interfaces/product-category-card.interface';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryCardComponent {
  @Input() productCategoryCard!: IProductCategoryCard;

  constructor(private router: Router) {}

  public goToCategory() {
    this.router.navigate([ERoutes.CATALOG_PAGE, this.productCategoryCard.id]);
  }
}
