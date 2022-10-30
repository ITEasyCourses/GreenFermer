import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { OrdersService } from '../services/orders.service';

@Injectable()
export class CheckoutResultGuard implements CanActivate {
  constructor(private ordersService: OrdersService) {}
  canActivate(): Observable<boolean> | boolean {
    if (this.ordersService.isNextOrder) {
      this.ordersService.isNextOrder = false;
      return true;
    } else {
      return false;
    }
  }
}
