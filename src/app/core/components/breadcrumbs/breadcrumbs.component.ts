import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TrackByFunction
} from '@angular/core';
import { ActivatedRouteSnapshot, Data, Router } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/IBreadCrumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];
  constructor(private router: Router) {}

  public trackByFn: TrackByFunction<Breadcrumb> = (index, item) => item.label;

  public ngOnInit(): void {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs: Breadcrumb[] = [];
    this.addBreadcrumb(root, [], breadcrumbs);
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
      } else {
        this.breadcrumbs = [...this.breadcrumbs];
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
