import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'green-fermer';
  public yellowHeader = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.handlerOfRouterSubscribe();
  }

  private handlerOfRouterSubscribe(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((route: NavigationEnd) => {
        this.yellowHeader = route.urlAfterRedirects !== '/';
      });
  }
}
