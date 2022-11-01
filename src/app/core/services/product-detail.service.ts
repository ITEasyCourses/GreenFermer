import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';

import { ProductDetail } from '../interfaces/product-detail';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  constructor(private angularFirestore: AngularFirestore) {}

  public getProduct(
    categoryId: string,
    productId: string
  ): Observable<ProductDetail> {
    return this.angularFirestore
      .collection('categories')
      .doc(categoryId)
      .collection('products')
      .doc(productId)
      .valueChanges()
      .pipe(take(1)) as unknown as Observable<ProductDetail>;
  }
}
