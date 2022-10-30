import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private angularFirestore: AngularFirestore) {}

  // TODO Дописать типизацию 'order', когда будет
  public setOrder(userId: string, order: any): void {
    this.angularFirestore
      .collection('users')
      .doc(userId)
      .collection('orders')
      .doc()
      .set(order);
  }
}
