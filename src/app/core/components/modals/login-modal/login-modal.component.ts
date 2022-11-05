import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { EMAIL_PATTERN } from '../../../constants/reg-exp';
import { AuthService } from '../../../services/auth.service';
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
    private fb: FormBuilder,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('login-modal');
    this.initLoginGroup();
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

  public loginForm(): void {
    if (this.loginFormGroup.valid) {
      this.authService
        .signIn(
          this.loginFormGroup.value.email,
          this.loginFormGroup.value.password
        )
        .toPromise()
        .then(() => {
          this.find();
        });
    }
  }

  public initWithGoogle(): void {
    this.authService
      .signWithGoogle()
      .toPromise()
      .then(() => {
        this.find();
      });
  }

  public goToRegistration(): void {
    this.dialogRef.close();
    this.matDialog.open(RegistrationModalComponent);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  private find(): void {
    this.afAuth.authState.subscribe((res) => {
      if (res !== null) {
        this.dialogRef.close();
      }
    });
  }
}
