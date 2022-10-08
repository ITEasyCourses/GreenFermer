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
  public rememberUser = false;
  private test!: any;

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
      const login = {
        email: this.loginFormGroup.get('email')?.value,
        password: this.loginFormGroup.get('password')?.value,
        rememberUser: this.rememberUser
      };
      /* Место для дальнейшей отправки данных с контролов. Сейчас данные присваиваются в переменную test для обхода esLint */
      this.test = login;
    }
  }

  public initLoginGroup(): void {
    this.loginFormGroup = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regExpService.EMAIL_PATTERN)
      ]),
      password: new FormControl('', [])
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public setRememberUser(event: boolean): void {
    this.rememberUser = event;
  }
}
