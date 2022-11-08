import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { ERoutes } from '../enums/routes';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public isNextOrder = false;

  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  // TODO Дописать типизацию 'order', когда будет
  public setOrder(userId: string, order: any): void {
    this.angularFirestore
      .collection('users')
      .doc(userId)
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        this.isNextOrder = true;
        this.router.navigate([ERoutes.CHECKOUT_RESULT]);
      });
  }
}
