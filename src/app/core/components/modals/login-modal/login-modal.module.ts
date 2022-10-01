import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
  imports: [CommonModule, MatDialogModule]
})
export class LoginModalModule {}
