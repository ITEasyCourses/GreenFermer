import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { GetControlModule } from '../../pipes/get-control/get-control.module';
import { InputModule } from '../input/input.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { SelectDeliveryModule } from '../select-delivery/select-delivery.module';
import { SelectModule } from '../select/select.module';
import { SortSelectModule } from '../sort-select/sort-select.module';

import { DeliveryPaymentComponent } from './delivery-payment.component';

@NgModule({
  declarations: [DeliveryPaymentComponent],
  exports: [DeliveryPaymentComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    RadioButtonModule,
    SortSelectModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    GetControlModule,
    SelectModule,
    SelectDeliveryModule,
    IconSpriteModule
  ]
})
export class DeliveryPaymentModule {}
