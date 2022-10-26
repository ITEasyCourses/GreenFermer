import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';

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
}
