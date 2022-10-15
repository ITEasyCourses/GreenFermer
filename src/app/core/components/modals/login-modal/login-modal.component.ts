import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { EMAIL_PATTERN } from '../../../constants/reg-exp';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {
  public loginFormGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private matDialog: MatDialog,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('login-modal');
    this.initLoginGroup();
  }

  public loginForm(): void {
    if (this.loginFormGroup.valid) {
      /* Место для дальнейшей отправки данных*/
    }
  }

  public initLoginGroup(): void {
    this.loginFormGroup = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN)
      ]),
      password: new FormControl('', [Validators.required]),
      rememberUser: new FormControl(false, [])
    });
  }

  public goToRegistration(): void {
    this.dialogRef.close();
    this.matDialog.open(RegistrationModalComponent);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
