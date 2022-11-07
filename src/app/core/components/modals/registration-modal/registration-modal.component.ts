import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material/dialog';

import {
  patternValidators,
  USER_START_SELECT_TYPE,
  USER_TYPE
} from '../../../constants/registration.constants';
import { SortOption } from '../../../interfaces/sort-option';
import { AuthService } from '../../../services/auth.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationModalComponent implements OnInit {
  public registrationFormGroup!: FormGroup;
  public typeUserValue = USER_START_SELECT_TYPE;
  public textForRadioBtn: SortOption[] = USER_TYPE;

  constructor(
    private dialogRef: MatDialogRef<RegistrationModalComponent>,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dialogRef.addPanelClass('registration-modal');
    this.formValidation();
  }

  public formValidation(): void {
    this.registrationFormGroup = this.fb.group({
      userType: new FormControl(`${this.typeUserValue}`, [Validators.required]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(patternValidators.NAME_PATTERN)
      ]),
      userSerName: new FormControl('', [
        Validators.required,
        Validators.pattern(patternValidators.NAME_PATTERN)
      ]),
      userPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(patternValidators.PHONE_PATTERN)
      ]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(patternValidators.EMAIL_PATTERN)
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(patternValidators.PASSWORD_PATTERN)
      ])
    });
  }

  public setUserTypeControl(event: string) {
    this.typeUserValue = event;
    this.formValidation();
  }

  public registration(): void {
    if (this.registrationFormGroup.valid) {
      this.authService.signUp(this.registrationFormGroup.value);
    }
  }

  initWithGoogle() {
    this.authService.signWithGoogle();
  }

  public goToLogin(): void {
    this.dialogRef.close();
    const loginDialogConfig = new MatDialogConfig();
    this.matDialog.open(LoginModalComponent, loginDialogConfig);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
