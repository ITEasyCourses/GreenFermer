import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { HEADER_LOGO } from '../../constants/header.constants';
import { IAuthenticationUser } from '../../interfaces/i-authentication-user';
import { IHeaderBackground } from '../../interfaces/i-heder-background';
import { RegistrationModalComponent } from '../modal/registration-modal/registration-modal.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponentComponent implements OnInit {
  @Input() public sessionUser?: IAuthenticationUser;

  public logo!: IHeaderBackground;
  public scrollStartPoint = 0;
  public isBottom!: boolean;

  constructor(public router: Router, private regDialog: MatDialog) {
    this.isBottom = false;
  }

  public get checkRoutAndScrollOptions(): boolean {
    return this.router.url === '/' && !this.isBottom;
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    this.isBottom = window.scrollY > this.scrollStartPoint;
  }

  public ngOnInit(): void {
    this.logo = HEADER_LOGO;
  }

  public openRegModal(): void {
    const regDialogConfig = new MatDialogConfig();
    this.regDialog.open(RegistrationModalComponent, regDialogConfig);
  }
}
