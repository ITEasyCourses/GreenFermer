import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { XCircle } from 'angular-feather/icons';

import { GetControlModule } from '../../../pipes/get-control/get-control.module';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { InputModule } from '../../input/input.module';

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
    FeatherModule.pick(icons),
    CheckboxModule,
    GetControlModule,
    ReactiveFormsModule,
    InputModule
  ]
})
export class LoginModalModule {}
