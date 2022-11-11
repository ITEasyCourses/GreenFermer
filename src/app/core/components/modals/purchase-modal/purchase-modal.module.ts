import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../../button/button.module';
import { ProductPurchaseCardModule } from '../../product-purchase-card/product-purchase-card.module';
import { ProductPurchaseModule } from '../../product-purchase/product-purchase.module';
import { SortSelectModule } from '../../sort-select/sort-select.module';

import { PurchaseModalComponent } from './purchase-modal.component';

@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    SortSelectModule,
    ProductPurchaseModule,
    ProductPurchaseCardModule,
    ButtonModule,
    IconSpriteModule
  ]
})
export class PurchaseModalModule {}
