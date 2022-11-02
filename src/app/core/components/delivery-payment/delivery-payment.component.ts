import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  TrackByFunction
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

import { Delivery } from '../../constants/delivery';
import { CreditPay, Payment } from '../../constants/payment';
import { EDelivery, EPayment } from '../../enums/delivery-payment';
import { SelectOption, DeliveryType } from '../../interfaces/delivery-type';
import { PaymentType } from '../../interfaces/payment-type';

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
  public deliveryType = EDelivery.SELF;
  public paymentType = EPayment.CASH;
  public paymentControl!: string;
  public cityId!: number;
  public label!: string;
  public labelEndPoint!: string;

  public trackByFn: TrackByFunction<DeliveryType> = (
    index: number,
    item: DeliveryType
  ) => item.value;

  public city(objCity: SelectOption, item: DeliveryType): void {
    this.cityId = objCity.id;
    this.label = objCity.viewValue;
    item.group.patchValue({ city: objCity.viewValue, cityID: objCity.id });
    item.group.patchValue({ cityPlace: null, cityPlaceID: null });
    this.labelEndPoint = '';
    this.deliveryFB = item.group;
    this.send();
  }

  public endPoint(objCityPlace: SelectOption, item: DeliveryType): void {
    this.labelEndPoint = objCityPlace.viewValue;
    item.group.patchValue({
      cityPlace: objCityPlace.viewValue,
      cityPlaceID: objCityPlace.id
    });
    this.deliveryFB = item.group;
    this.send();
  }

  public reset(): void {
    this.label = '';
    this.labelEndPoint = '';
    this.cityId = 0;
    if (this.deliveryFB) {
      this.deliveryFB.reset();
    }
  }

  public paymentChange(event: MatRadioChange) {
    this.paymentType = event.value;
    this.send();
  }

  public send(): void {
    if (this.deliveryFB) {
      this.deliveryFB.patchValue({ payment: this.paymentType });
      if (this.deliveryFB.valid) {
        this.deliveryObj.emit(this.deliveryFB.value);
      }
    }
  }
}
