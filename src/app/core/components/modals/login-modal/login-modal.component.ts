import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<LoginModalComponent>) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('login-modal');
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
