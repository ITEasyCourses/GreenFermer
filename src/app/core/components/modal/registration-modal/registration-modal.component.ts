import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {
  EMAIL_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN,
  PHONE_PATTERN
} from '../../../constants/registration.constants';
import { SortOption } from '../../../interfaces/sort-option';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationModalComponent implements OnInit {
  public userTypeControl: FormControl = new FormControl(``, [
    Validators.required
  ]);

  public userNameControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_PATTERN)
  ]);

  public userSerNameControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_PATTERN)
  ]);

  public userPhoneNumberControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_PATTERN)
  ]);

  public userEmailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_PATTERN)
  ]);

  public userPasswordControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_PATTERN)
  ]);

  public regForm!: FormGroup;
  public textForRadioBtn: SortOption[] = [
    { value: 'bayer', viewValue: 'Покупець' },
    { value: 'farm', viewValue: 'Фермер' }
  ];

  constructor(
    private dialogRef: MatDialogRef<RegistrationModalComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValidation();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public SetUserTypeControl(event: string) {
    this.userTypeControl.setValue(event);
  }

  public formValidation(): void {
    this.regForm = this.formBuilder.group({
      userType: this.userTypeControl,
      userName: this.userNameControl,
      userSerName: this.userSerNameControl,
      userPhoneNumber: this.userPhoneNumberControl,
      userEmail: this.userEmailControl,
      userPassword: this.userPasswordControl
    });
  }

  public newUserReg(): void {
    const allUser = JSON.parse(localStorage.getItem('users') || '[]');

    const payload = [
      ...allUser,
      {
        userType: this.regForm.get('userType')?.value,
        userName: this.regForm.get('userName')?.value,
        userSerName: this.regForm.get('userSerName')?.value,
        userPhoneNumber: this.regForm.get('userPhoneNumber')?.value,
        userEmail: this.regForm.get('userEmail')?.value,
        userPassword: this.regForm.get('userPassword')?.value
      }
    ];

    const regUser = JSON.stringify(payload);
    localStorage.setItem('users', regUser);
  }

  public reg(): void {
    this.formValidation();
    if (this.regForm.valid) {
      this.newUserReg();
      this.close();
    }
  }

  public goToLogin(): void {
    this.dialogRef.close();
  }
}
