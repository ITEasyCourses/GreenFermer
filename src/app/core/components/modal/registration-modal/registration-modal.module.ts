import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import {
  CreditCard,
  DollarSign,
  MessageCircle,
  XCircle
} from 'angular-feather/icons';

import { ButtonModule } from '../../button/button.module';
import { RadioGroupComponentModule } from '../../radio-group-component/radio-group-component.module';

import { RegistrationModalComponent } from './registration-modal.component';
import { InputModule } from '../../input/input.module';

const icons = {
  CreditCard,
  DollarSign,
  MessageCircle,
  XCircle
};

@NgModule({
  declarations: [RegistrationModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    RadioGroupComponentModule,
    FeatherModule.pick(icons),
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    InputModule
  ]
})
export class RegistrationModalModule {}
