import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { IProductCard } from '../../core/interfaces/i-product-card';
import { ProductDetailService } from '../../core/services/product-detail.service';

@Injectable()
export class ProductDetailResolver implements Resolve<Observable<string>> {
  constructor(private productDetailService: ProductDetailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const categoryId = route.params['categoryTypeId'];
    const productId = route.params['product-detail'];
    return this.productDetailService
      .getProduct(categoryId, productId)
      .pipe(switchMap((data: IProductCard) => of(data.title)));
  }
}
