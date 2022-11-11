import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { GetControlModule } from '../../../pipes/get-control/get-control.module';
import { ButtonModule } from '../../button/button.module';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { InputModule } from '../../input/input.module';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    CheckboxModule,
    GetControlModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    IconSpriteModule
  ]
})
export class LoginModalModule {}
