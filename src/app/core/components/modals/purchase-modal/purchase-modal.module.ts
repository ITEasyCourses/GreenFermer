import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import { ProductPurchaseCardModule } from '../../product-purchase-card/product-purchase-card.module';
import { ProductPurchaseModule } from '../../product-purchase/product-purchase.module';
import { SortSelectModule } from '../../sort-select/sort-select.module';

import { PurchaseModalComponent } from './purchase-modal.component';

@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    FeatherModule,
    SortSelectModule,
    ProductPurchaseModule,
    ProductPurchaseCardModule
  ]
})
export class PurchaseModalModule {}
