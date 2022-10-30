import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ERoutes } from '../enums/routes';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public isNextOrder = false;
  constructor(private router: Router) {}

  public goToCheckoutResult(): void {
    this.isNextOrder = true;
    this.router.navigate([ERoutes.CHECKOUT_RESULT]);
  }
}
