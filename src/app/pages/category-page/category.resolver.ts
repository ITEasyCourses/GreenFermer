import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { CategoryService } from '../../core/services/category.service';

@Injectable()
export class CategoryResolver implements Resolve<Observable<string>> {
  constructor(private categoryService: CategoryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const id = route.params['categoryTypeId'];

    return this.categoryService
      .getCategoryInfo(id)
      .pipe(switchMap((data) => of(data.title)));
  }
}
