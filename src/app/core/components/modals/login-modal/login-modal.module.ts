import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { XCircle } from 'angular-feather/icons';

import { GetControlModule } from '../../../pipes/get-control/get-control.module';
import { ButtonModule } from '../../button/button.module';
import { CheckboxModule } from '../../checkbox/checkbox.module';

import { LoginModalComponent } from './login-modal.component';

const icons = {
  XCircle
};

@NgModule({
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    FeatherModule.pick(icons),
    CheckboxModule,
    GetControlModule,
    ReactiveFormsModule
  ]
})
export class LoginModalModule {}
