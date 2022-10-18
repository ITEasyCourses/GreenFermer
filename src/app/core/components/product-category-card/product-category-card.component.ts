import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { IProductCategoryCard } from '../../interfaces/product-category-card.interface';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryCardComponent {
  @Input() productCategoryCard?: IProductCategoryCard;
  @Output() card: EventEmitter<IProductCategoryCard> =
    new EventEmitter<IProductCategoryCard>();

  public emitCard(currentCard?: IProductCategoryCard): void {
    this.card.emit(currentCard);
  }
}
