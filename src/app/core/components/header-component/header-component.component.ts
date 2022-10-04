import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { HEADER_LOGO } from '../../constants/header.constants';
import { IAuthenticationUser } from '../../interfaces/i-authentication-user';
import { IHeaderBackground } from '../../interfaces/i-heder-background';

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

  constructor(public router: Router) {
    this.isBottom = false;
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    window.scrollY > this.scrollStartPoint
      ? (this.isBottom = true)
      : (this.isBottom = false);
  }

  public ngOnInit(): void {
    this.logo = HEADER_LOGO;
  }
}
