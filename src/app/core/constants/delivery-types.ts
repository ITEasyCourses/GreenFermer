import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EDelivery } from '../enums/delivery-payment';
import { DeliveryType } from '../interfaces/delivery-type';

import { cityOptions, cityPlaces, newPostPlaces, ukrPostPlaces } from './city-options';

export const deliverySelf: DeliveryType = {
  label: 'Самовівоз',
  value: EDelivery.SELF,
  group: new FormGroup(
    {
      city: new FormControl(null),
      cityID: new FormControl(null, [Validators.required]),
      cityPlace: new FormControl(null),
      cityPlaceID: new FormControl(null, [Validators.required]),
      deliveryType: new FormControl(EDelivery.SELF),
      payment: new FormControl(null, [Validators.required])
    },
    [Validators.required]
  ),
  cityOptions: cityOptions,
  cityPlaces: cityPlaces
};

export const deliveryNewPost: DeliveryType = {
  label: 'Нова Пошта',
  value: EDelivery.NEWPOST,
  group: new FormGroup(
    {
      city: new FormControl(null),
      cityID: new FormControl(null, [Validators.required]),
      cityPlace: new FormControl(null),
      cityPlaceID: new FormControl(null, [Validators.required]),
      deliveryType: new FormControl(EDelivery.NEWPOST),
      payment: new FormControl(null)
    },
    [Validators.required]
  ),
  cityOptions: cityOptions,
  cityPlaces: newPostPlaces
};

export const deliveryUkrPost: DeliveryType = {
  label: 'УкрПошта',
  value: EDelivery.UKRPOST,
  group: new FormGroup(
    {
      city: new FormControl(null),
      cityID: new FormControl(null, [Validators.required]),
      cityPlace: new FormControl(null),
      cityPlaceID: new FormControl(null, [Validators.required]),
      deliveryType: new FormControl(EDelivery.NEWPOST),
      payment: new FormControl(null)
    },
    [Validators.required]
  ),
  cityOptions: cityOptions,
  cityPlaces: ukrPostPlaces
};

export const deliveryCourier: DeliveryType = {
  label: 'Кур’єр',
  value: EDelivery.COURIER,
  group: new FormGroup(
    {
      city: new FormControl(null),
      cityID: new FormControl(null, [Validators.required]),
      cityPlace: new FormControl(null, [Validators.required]),
      cityPlaceID: new FormControl(null),
      deliveryType: new FormControl(EDelivery.NEWPOST),
      payment: new FormControl(null)
    },
    [Validators.required]
  ),
  cityOptions: cityOptions,
  cityPlaces: {}
};
