import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { XCircle } from 'angular-feather/icons';

import { ButtonModule } from '../../button/button.module';

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
    FeatherModule.pick(icons)
  ]
})
export class LoginModalModule {}
