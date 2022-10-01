import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginModalComponent } from './core/components/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'green-fermer';

  constructor(
    private dialog: MatDialog
  ) {} /* Удалить конструкрор и мат диалог*/

  public dialogOpen(): void {
    this.dialog.open(LoginModalComponent);
  }
}
