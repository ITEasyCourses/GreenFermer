import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { RouteNavigation } from './core/interfaces/route-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'green-fermer';
  public yellowHeader = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: RouteNavigation) => {
        this.yellowHeader = route.urlAfterRedirects !== '/';
      });
  }
}

/* id: 1
type: 1
url: "/catalog"
urlAfterRedirects: "/catalog"*/
