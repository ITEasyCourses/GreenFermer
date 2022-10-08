import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { RegExpService } from '../../../services/reg-exp.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public loginFormGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder,
    private regExpService: RegExpService
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
        Validators.pattern(this.regExpService.EMAIL_PATTERN)
      ]),
      password: new FormControl('', [Validators.required]),
      rememberUser: new FormControl(false, [])
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
