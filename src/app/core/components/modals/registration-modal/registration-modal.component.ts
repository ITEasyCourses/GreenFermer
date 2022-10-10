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
  public registrationFormGroup!: FormGroup;
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
    this.dialogRef.addPanelClass('registration-modal');
    this.formValidation();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public SetUserTypeControl(event: string) {
    this.typeUserValue = event;
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

  public newUserRegistration(): void {
    const payload = [
      {
        userType: this.registrationFormGroup.get('userType')?.value,
        userName: this.registrationFormGroup.get('userName')?.value,
        userSerName: this.registrationFormGroup.get('userSerName')?.value,
        userPhoneNumber:
          this.registrationFormGroup.get('userPhoneNumber')?.value,
        userEmail: this.registrationFormGroup.get('userEmail')?.value,
        userPassword: this.registrationFormGroup.get('userPassword')?.value
      }
    ];
    JSON.stringify(payload);
  }

  public registration(): void {
    this.formValidation();
    // console.log(this.registrationFormGroup.get('userName'), 'userName');
    if (this.registrationFormGroup.valid) {
      this.newUserRegistration();
      this.close();
    }
  }

  public goToLogin(): void {
    this.dialogRef.close();
  }
}
