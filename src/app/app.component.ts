import { Component } from '@angular/core';

import { IAuthenticationUser } from './core/interfaces/i-authentication-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'green-fermer';
  public sessionUser: IAuthenticationUser = {
    isAuthentication: true,
    avatar: '../assets/images/header-logo/images.jpg',
    name: 'Сід',
    id: 1
  };
}
