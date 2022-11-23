import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryPaymentModule } from '../../core/components/delivery-payment/delivery-payment.module';
import { InputModule } from '../../core/components/input/input.module';
import { ProductCheckoutCardModule } from '../../core/components/product-checkout-card/product-checkout-card.module';
import { ProductPurchaseCardModule } from '../../core/components/product-purchase-card/product-purchase-card.module';
import { PurchaseTotalModule } from '../../core/components/purchase-total/purchase-total.module';
import { SelectDeliveryModule } from '../../core/components/select-delivery/select-delivery.module';

import { CheckoutPageComponent } from './checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPageComponent
  }
];

@NgModule({
  declarations: [CheckoutPageComponent],
  exports: [CheckoutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    ProductPurchaseCardModule,
    SelectDeliveryModule,
    ProductCheckoutCardModule,
    DeliveryPaymentModule,
    PurchaseTotalModule
  ]
})
export class CheckoutPageModule {}
