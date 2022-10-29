import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public order = {
    userId: 0
  };

  constructor(
    private angularFirestore: AngularFirestore,
    private authService: AuthService
  ) {}

  public getUserId(): void {
    this.authService
      .getAuthUser()
      .pipe(take(1))
      .subscribe((user) => {
        this.order.userId = user.id;
      });
    this.setOrder();
  }

  public setOrder(): void {
    this.angularFirestore.collection('orders').doc('order').set(this.order);
  }
}
