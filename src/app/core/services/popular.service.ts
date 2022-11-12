import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';

import { IProductCard } from '../interfaces/i-product-card';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
  constructor(private fireStore: AngularFirestore) {}

  public getPopulars(): Observable<IProductCard[]> {
    return this.fireStore
      .collection('populars')
      .valueChanges()
      .pipe(take(1)) as unknown as Observable<IProductCard[]>;
  }
}
