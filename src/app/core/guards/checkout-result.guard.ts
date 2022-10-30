import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { OrdersService } from '../services/orders.service';

@Injectable()
export class CheckoutResultGuard implements CanActivate {
  constructor(private orderService: OrdersService) {}
  canActivate(): Observable<boolean> | boolean {
    if (this.orderService.isNextOrder) {
      this.orderService.isNextOrder = false;
      return true;
    } else {
      return false;
    }
  }
}
