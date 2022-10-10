import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { patternValidators } from '../../../constants/registration.constants';
import { SortOption } from '../../../interfaces/sort-option';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationModalComponent implements OnInit {
  public registrationForm!: FormGroup;
  public typeUserValue = '';
  public textForRadioBtn: SortOption[] = [
    { value: 'bayer', viewValue: 'Покупець' },
    { value: 'farm', viewValue: 'Фермер' }
  ];

  constructor(
    private dialogRef: MatDialogRef<RegistrationModalComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValidation();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public SetUserTypeControl(event: string) {
    this.typeUserValue = event;
  }

  public formValidation(): void {
    this.registrationForm = this.fb.group({
      userType: new FormControl(`${this.typeUserValue}`, [Validators.required]),
      userName: new FormControl(``, [
        Validators.required,
        Validators.pattern(patternValidators.NAME_PATTERN)
      ]),
      userSerName: new FormControl(``, [
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

  public newUserRegistration(): void {
    const payload = [
      {
        userType: this.registrationForm.get('userType')?.value,
        userName: this.registrationForm.get('userName')?.value,
        userSerName: this.registrationForm.get('userSerName')?.value,
        userPhoneNumber: this.registrationForm.get('userPhoneNumber')?.value,
        userEmail: this.registrationForm.get('userEmail')?.value,
        userPassword: this.registrationForm.get('userPassword')?.value
      }
    ];
    JSON.stringify(payload);
  }

  public registration(): void {
    this.formValidation();
    // console.log(this.registrationForm.value, 'username');
    // console.log(this.registrationForm);
    // console.log(this.registrationForm.valid);
    if (this.registrationForm.valid) {
      this.newUserRegistration();
      this.close();
    }
  }

  public goToLogin(): void {
    this.dialogRef.close();
  }
}
