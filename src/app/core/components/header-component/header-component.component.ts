import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { HEADER_LOGO } from '../../constants/header.constants';
import { CATEGORIES, LABEL_SELECT } from '../../constants/select.constants';
import { IAuthenticationUser } from '../../interfaces/i-authentication-user';
import { IHeaderBackground } from '../../interfaces/i-heder-background';
import { SortOption } from '../../interfaces/sort-option';

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
  public catalog!: string;
  public optionCatalog!: SortOption[];

  constructor(public router: Router) {
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
    this.optionCatalog = CATEGORIES;
    this.catalog = LABEL_SELECT.CATALOG;
    this.logo = HEADER_LOGO;
  }
}
