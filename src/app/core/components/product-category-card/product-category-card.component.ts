import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IProductCategoryCard } from '../../interfaces/product-category-card.interface';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryCardComponent {
  @Input() productCategoryCard?: IProductCategoryCard;

  constructor(private router: Router) {}

  public goToCategory(productCategoryCard?: IProductCategoryCard) {
    if (productCategoryCard) {
      this.router.navigate(['/catalog', productCategoryCard.id]);
    }
  }
}
