import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { HEADER_LOGO } from '../../constants/header.constants';
import { IAuthenticationUser } from '../../interfaces/i-authentication-user';
import { IHeaderBackground } from '../../interfaces/i-heder-background';
import { RegistrationModalComponent } from '../modals/registration-modal/registration-modal.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponentComponent implements OnInit {
  public sessionUser?: IAuthenticationUser;

  public logo!: IHeaderBackground;
  public scrollStartPoint = 0;
  public isBottom!: boolean;
  public labelForSelectCatalog!: string;
  public mocListForOptionSelect!: SortOption[];
  public labelForSelectMenu!: string;

  constructor(private router: Router, private matDialog: MatDialog) {
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
    this.labelForSelectCatalog = LABEL_SELECT.CATALOG;
    this.labelForSelectMenu = LABEL_SELECT.MENU;
    this.mocListForOptionSelect = CATEGORIES;
  }

  public openRegModal(): void {
    const regDialogConfig = new MatDialogConfig();
    this.matDialog.open(RegistrationModalComponent, regDialogConfig);
  }
}
