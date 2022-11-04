import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ERoutes } from '../enums/routes';
import { OrdersService } from '../services/orders.service';

@Injectable()
export class CheckoutResultGuard implements CanActivate {
  constructor(private ordersService: OrdersService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.ordersService.isNextOrder) {
      this.ordersService.isNextOrder = false;
      return true;
    } else {
      this.router.navigate([ERoutes.HOME]);
      return false;
    }
  }
}
