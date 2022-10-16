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
import { CATEGORIES, LABEL_SELECT } from '../../constants/select.constants';
import { ERoutes } from '../../enums/routes';
import { IAuthenticationUser } from '../../interfaces/i-authentication-user';
import { IHeaderBackground } from '../../interfaces/i-heder-background';
import { SortOption } from '../../interfaces/sort-option';
import { RegistrationModalComponent } from '../modals/registration-modal/registration-modal.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponentComponent implements OnInit {
  @Input() isTransparent = false;

  public sessionUser?: IAuthenticationUser;

  public logo!: IHeaderBackground;

  public scrollStartPoint = 0;
  public isBottom!: boolean;
  public labelForSelectCatalog!: string;
  public mocListForOptionSelect!: SortOption[];
  public labelForSelectMenu!: string;
  public catalog!: string;
  public optionCatalog!: SortOption[];

  constructor(private router: Router, private matDialog: MatDialog) {
    this.isBottom = false;
  }

  public get checkRoutAndScrollOptions(): boolean {
    if (this.isTransparent) {
      return false;
    }
    return this.router.url === '/' && !this.isBottom;
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    this.isBottom = window.scrollY > this.scrollStartPoint;
  }

  public ngOnInit(): void {
    this.optionCatalog = CATEGORIES;
    this.catalog = LABEL_SELECT.CATALOG;
    this.logo = HEADER_LOGO;
    this.labelForSelectCatalog = LABEL_SELECT.CATALOG;
    this.labelForSelectMenu = LABEL_SELECT.MENU;
    this.mocListForOptionSelect = CATEGORIES;
  }

  public openRegModal(): void {
    const regDialogConfig = new MatDialogConfig();
    this.matDialog.open(RegistrationModalComponent, regDialogConfig);
  }

  public goToHome(): void {
    this.router.navigate([ERoutes.HOME]);
  }

  public goToCatalog(): void {
    this.router.navigate([ERoutes.CATALOG_PAGE]);
  }
}
