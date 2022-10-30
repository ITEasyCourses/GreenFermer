import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { ERoutes } from '../enums/routes';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public order = {
    userId: 0
  };

  public isNextOrder = false;

  constructor(
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private router: Router
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
    this.goToCheckoutResult();
  }

  public goToCheckoutResult(): void {
    this.isNextOrder = true;
    this.router.navigate([ERoutes.CHECKOUT_RESULT]);
  }
}
