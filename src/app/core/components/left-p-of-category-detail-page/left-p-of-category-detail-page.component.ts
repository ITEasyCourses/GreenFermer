import { Component, Input } from '@angular/core';

import { IProductCard } from '../../interfaces/i-product-card';

@Component({
  selector: 'app-left-p-of-category-detail-page',
  templateUrl: './left-p-of-category-detail-page.component.html',
  styleUrls: ['./left-p-of-category-detail-page.component.scss']
})
export class LeftPOfCategoryDetailPageComponent {
  @Input() products!: IProductCard[];
}
