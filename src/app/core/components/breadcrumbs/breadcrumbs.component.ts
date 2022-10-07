import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/core/interfaces/IBreadCrumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  public breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.data['breadcrumb']) {
        const breadcrumb = {
          label: this.getBreadcrumb(route.data),
          url: '/' + routeUrl.join('/')
        };
        this.breadcrumbs.push(breadcrumb);
      }
      this.addBreadcrumb(
        <ActivatedRouteSnapshot>route.firstChild,
        routeUrl,
        breadcrumbs
      );
    }
  }

  private getBreadcrumb(data: Data) {
    return typeof data['breadcrumb'] === 'function'
      ? data['breadcrumb'](data)
      : data['breadcrumb'];
  }
}
