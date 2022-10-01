import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthenticationUser } from '../../interfaces/i-authentication-user';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  @Input() sessionUser?: IAuthenticationUser;
  constructor(public router: Router) {}
}
