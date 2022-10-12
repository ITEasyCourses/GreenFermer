import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FeatherModule } from 'angular-feather';
import { CreditCard, DollarSign, Folder } from 'angular-feather/icons';

import { GetControlModule } from '../../pipes/get-control/get-control.module';
import { InputModule } from '../input/input.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { SelectDeliveryModule } from '../select-delivery/select-delivery.module';
import { SelectModule } from '../select/select.module';
import { SortSelectModule } from '../sort-select/sort-select.module';

import { DeliveryPaymentComponent } from './delivery-payment.component';

const icons = {
  DollarSign,
  CreditCard,
  Folder
};

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
    FeatherModule.pick(icons),
    InputModule,
    GetControlModule,
    SelectModule,
    SelectDeliveryModule
  ]
})
export class DeliveryPaymentModule {}
