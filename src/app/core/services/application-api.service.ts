import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApplicationApiService {
  constructor(private fireStore: AngularFirestore) {}

  public postOne(data: any): void {
    this.fireStore.collection('categories').doc().set(data);
  }

  public postTwo(data: any): void {
    this.fireStore
      .collection('categories/UmII4jwKo1yGixRC9ieR/products')
      .doc()
      .set(data);
  }
}
