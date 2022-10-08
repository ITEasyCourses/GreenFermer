import { Component } from '@angular/core';

import { DELIVERY_CITIES } from '../../constants/delivery-payment.constans';
import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.component.html',
  styleUrls: ['./delivery-payment.component.scss']
})
export class DeliveryPaymentComponent {
  public deliveryType = 'self';
  public paymentType = 'cash';
  public creditType!: string;
  public city!: string;
  public postOffice!: string;
  public deliveryCities: SortOption[] = DELIVERY_CITIES;

  public cityDelivery(city: any): void {
    this.city = city;
  }

  public deliveryPostOffice(city: any): void {
    this.postOffice = city;
  }

  credit(creditValue: any) {
    this.creditType = creditValue.value;
  }
}
