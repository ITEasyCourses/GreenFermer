import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';

import { IProductCard } from '../interfaces/i-product-card';
import { IProductCategoryCard } from '../interfaces/product-category-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private fireStore: AngularFirestore) {}

  public getCategory(): Observable<IProductCategoryCard[]> {
    return this.fireStore
      .collection('categories')
      .valueChanges({ idField: 'id' })
      .pipe(take(1)) as unknown as Observable<IProductCategoryCard[]>;
  }

  public getCategoryInfo(categoryId: string): Observable<IProductCategoryCard> {
    return this.fireStore
      .collection('categories')
      .doc(categoryId)
      .valueChanges({ idField: 'id' })
      .pipe(take(1)) as unknown as Observable<IProductCategoryCard>;
  }

  public getCategoryProducts(categoryId: string): Observable<IProductCard[]> {
    return this.fireStore
      .collection('categories')
      .doc(categoryId)
      .collection('products')
      .valueChanges({ idField: 'id' })
      .pipe(take(1)) as unknown as Observable<IProductCard[]>;
  }

  public getCategoryDetail(
    categoryId: string,
    typeId: string
  ): Observable<IProductCard[]> {
    return this.fireStore
      .collection('categories')
      .doc(categoryId)
      .collection('products', (ref) => ref.where('typeId', '==', typeId))
      .valueChanges({ idField: 'id' })
      .pipe(take(1)) as unknown as Observable<IProductCard[]>;
  }
}
