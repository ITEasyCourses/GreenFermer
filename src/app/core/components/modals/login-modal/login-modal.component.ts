import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public loginFormGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('login-modal');
    this.initLoginGroup();
  }

  public initLoginGroup(): void {
    this.loginFormGroup = this.fb.group({
      email: new FormControl('', []),
      password: new FormControl('', []),
      rememberUserCheckBox: new FormControl(false)
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
