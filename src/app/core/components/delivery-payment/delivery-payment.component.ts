import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

import { Delivery } from '../../constants/Delivery';
import { CreditPay, Payment } from '../../constants/Payment';
import { EDelivery } from '../../enums/delivery_payment';
import { DeliveryType } from '../../interfaces/deliveryType';
import { PaymentType } from '../../interfaces/paymentType';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.component.html',
  styleUrls: ['./delivery-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryPaymentComponent {
  @Output() deliveryObj: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  public delivery: DeliveryType[] = Delivery;
  public payment: PaymentType[] = Payment;
  public credit: PaymentType[] = CreditPay;
  public deliveryFB!: FormGroup;

  public enumDelivery = EDelivery;
  public deliveryType = 'self';
  public paymentType = 'cash';
  public paymentControl!: string;
  public cityId!: number;
  public postOfficeID!: number;

  public cityDelivery(cityId: string, item: DeliveryType): void {
    this.cityId = +cityId;
    item.group.patchValue({
      city: item.cityOptions[this.cityId - 1].viewValue
    });
    item.group.patchValue({ payment: this.paymentType });
    this.deliveryFB = item.group;
  }

  public deliveryPostOffice(postOfficeID: string, item: DeliveryType): void {
    this.postOfficeID = +postOfficeID;
    item.group.patchValue({
      cityPlace: item.cityPlaces[this.cityId][this.postOfficeID - 1].address
    });
    item.group.patchValue({ payment: this.paymentType });
    this.deliveryFB = item.group;
  }

  public reset(group: FormGroup) {
    group.patchValue({ cityPlace: null, cityPlaceID: null });
  }

  public paymentChange(event: MatRadioChange) {
    this.paymentType = event.value;
    this.send();
  }

  public send(): void {
    if (this.deliveryFB) {
      this.deliveryFB.patchValue({ payment: this.paymentType });
      if (this.deliveryFB.valid) {
        this.deliveryObj.emit(this.deliveryFB);
      }
    }
  }
}
