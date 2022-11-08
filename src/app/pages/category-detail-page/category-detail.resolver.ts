import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { IProductCard } from '../../core/interfaces/i-product-card';
import { CategoryService } from '../../core/services/category.service';

@Injectable()
export class CategoryDetailResolver implements Resolve<Observable<string>> {
  constructor(private categoryService: CategoryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const categoryId = route.params['categoryTypeId'];
    const typeId = route.params['categoryId'];
    return this.categoryService
      .getCategoryDetail(categoryId, typeId)
      .pipe(switchMap((data: IProductCard[]) => of(data[0].typeText)));
  }
}
