import {
  ChangeDetectionStrategy,
  Component,
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
  public asd = 'asdad';
  public logo!: IHeaderBackground;
  constructor(public router: Router) {}

  public ngOnInit(): void {
    this.logo = HEADER_LOGO;
  }
}
