import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from '../../button/button.module';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
  imports: [CommonModule, MatDialogModule, ButtonModule]
})
export class LoginModalModule {}
