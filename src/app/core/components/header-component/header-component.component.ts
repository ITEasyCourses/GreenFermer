import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  Self
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { HEADER_LOGO } from '../../constants/header.constants';
import { CATEGORIES, LABEL_SELECT } from '../../constants/select.constants';
import { ERoutes } from '../../enums/routes';
import { IHeaderBackground } from '../../interfaces/i-heder-background';
import { SortOption } from '../../interfaces/sort-option';
import { AuthService } from '../../services/auth.service';
import { UnsubscribeService } from '../../services/unsubscribe.service';
import { PurchaseModalComponent } from '../modals/purchase-modal/purchase-modal.component';
import { RegistrationModalComponent } from '../modals/registration-modal/registration-modal.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class HeaderComponentComponent implements OnInit {
  @Input() isTransparent = false;

  public sessionUser?: any;

  public sessionOn!: boolean;

  public logo!: IHeaderBackground;

  public scrollStartPoint = 0;
  public isBottom!: boolean;
  public labelForSelectCatalog!: string;
  public mocListForOptionSelect!: SortOption[];
  public labelForSelectMenu!: string;
  public catalog!: string;
  public optionCatalog!: SortOption[];
  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private afAuth: AngularFireAuth,
    @Self() private unsubscribeService: UnsubscribeService
  ) {
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
    this.useProfile();
    this.cdr.detectChanges();
  }

  public openRegModal(): void {
    const regDialogConfig = new MatDialogConfig();
    this.matDialog.open(RegistrationModalComponent, regDialogConfig);
  }

  public openPurchModal(): void {
    this.matDialog.open(PurchaseModalComponent);
  }

  public goToHome(): void {
    this.router.navigate([ERoutes.HOME]);
  }

  public goToCatalog(): void {
    this.router.navigate([ERoutes.CATALOG_PAGE]);
  }

  public exit(): void {
    this.authService.signOut();
    this.cdr.detectChanges();
  }

  public useProfile(): Observable<any> {
    return of(
      this.afAuth.authState
        .pipe(this.unsubscribeService.takeUntilDestroy)
        .subscribe((res) => {
          if (res) {
            this.sessionUser = res;
            this.sessionOn = true;
          } else {
            this.sessionOn = false;
          }
          this.cdr.detectChanges();
        })
    );
  }
}
