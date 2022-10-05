import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { DELIVERY_CITIES} from '../../constants/delivery-payment.constans';
import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.component.html',
  styleUrls: ['./delivery-payment.component.scss']
})
export class DeliveryPaymentComponent implements OnInit {
  public deliveryType = 'self';
  public paymentType = 'cash';
  public creditType!: string;
  public city!: string;
  public postOffice!: string;
  public deliveryCities: SortOption[] = DELIVERY_CITIES;

  @Output() currentCity: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.deliveryType)
  }

  public cityDelivery(city: any): void {
    this.city = city;
    console.log(this.city, 'this.city');
    this.currentCity.emit(this.city);
  }

  public deliveryPostOffice(city: any): void {
    this.postOffice = city;
    console.log(this.postOffice, 'this.postOffice');
  }

  credit(creditValue: any) {
    this.creditType = creditValue.value;
    console.log(this.creditType);
  }
}

//
// public delivery: Delivery[] = DELIVERY;
//
// public show: FormControl = new FormControl<boolean>(true);
// public hide: FormControl = new FormControl<boolean>(false);
// public deliveryFormArray!: FormArray;
//
// constructor(private fb: FormBuilder) {}
//
// public get getDeliveryFromArray(): any[] {
//   return this.deliveryFormArray.controls as any[];
// }
//
// ngOnInit(): void {
//   this.deliveryFormArray = this.fb.array(
//     this.delivery.map((el: any, idx: number) => {
//       return {
//         checkControl: new FormControl(false),
//         label: el.label,
//         value: el.value
//       };
//     })
//   );
//   console.log(this.deliveryFormArray.controls);
//   // console.log(this.delivery);
// }
//
//
//
// public onChange(radio: any): void {
//   const test = this.deliveryFormArray.value.map(
//     (el: Delivery, index: number) => ({
//       ...el,
//       checkControl: radio
//     })
//   );
//   // @ts-ignore
//   this.deliveryFormArray.value = test;
//   console.log(test);
//   console.log(radio);
// }
// }
