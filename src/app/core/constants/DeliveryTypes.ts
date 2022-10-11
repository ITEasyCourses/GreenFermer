import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EDelivery } from '../enums/delivery_payment';
import { DeliveryType } from '../interfaces/deliveryType';

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
      payment: new FormControl(null,[Validators.required])
    },
    [Validators.required]
  ),
  cityOptions: [
    {
      viewValue: 'Київ',
      id: 1
    },
    {
      viewValue: 'Харків',
      id: 2
    },
    {
      viewValue: 'Львів',
      id: 3
    }
  ],
  cityPlaces: {
    1: [
      {
        address: 'Наша адресса у Київі №1',
        id: 1
      },
      {
        address: 'Наша адресса  у Київі №2',
        id: 2
      },
      {
        address: 'Наша адресса  у Київі №3',
        id: 3
      }
    ],
    2: [
      {
        address: 'Наша адресса у Харкові №1',
        id: 1
      },
      {
        address: 'Наша адресса  у Харкові №2',
        id: 2
      },
      {
        address: 'Наша адресса  у Харкові №3',
        id: 3
      }
    ],
    3: [
      {
        address: 'Наша адресса у Львові №1',
        id: 1
      },
      {
        address: 'Наша адресса  у Львові №2',
        id: 2
      },
      {
        address: 'Наша адресса  у Львові №3',
        id: 3
      }
    ]
  }
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
  cityOptions: [
    {
      viewValue: 'Київ',
      id: 1
    },
    {
      viewValue: 'Харків',
      id: 2
    },
    {
      viewValue: 'Львів',
      id: 3
    }
  ],
  cityPlaces: {
    1: [
      {
        address: 'Відділення Новоі Пошти №1 у Київі',
        id: 1
      },
      {
        address: 'Відділення Новоі Пошти №2 у Київі',
        id: 2
      },
      {
        address: 'Відділення Новоі Пошти №3 у Київі',
        id: 3
      }
    ],
    2: [
      {
        address: 'Відділення Новоі Пошти №3 у Харкові',
        id: 1
      },
      {
        address: 'Відділення Новоі Пошти №3 у Харкові',
        id: 2
      },
      {
        address: 'Відділення Новоі Пошти №3 у Харкові',
        id: 3
      }
    ],
    3: [
      {
        address: 'Відділення Новоі Пошти №3 у Львові',
        id: 1
      },
      {
        address: 'Відділення Новоі Пошти №3 у Львові',
        id: 2
      },
      {
        address: 'Відділення Новоі Пошти №3 у Львові',
        id: 3
      }
    ]
  }
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
  cityOptions: [
    {
      viewValue: 'Київ',
      id: 1
    },
    {
      viewValue: 'Харків',
      id: 2
    },
    {
      viewValue: 'Львів',
      id: 3
    }
  ],
  cityPlaces: {
    1: [
      {
        address: 'Відділення Укр Пошти №1 у Київі',
        id: 1
      },
      {
        address: 'Відділення Укр Пошти №2 у Київі',
        id: 2
      },
      {
        address: 'Відділення Укр Пошти №3 у Київі',
        id: 3
      }
    ],
    2: [
      {
        address: 'Відділення Укр Пошти №3 у Харкові',
        id: 1
      },
      {
        address: 'Відділення Укр Пошти №3 у Харкові',
        id: 2
      },
      {
        address: 'Відділення Укр Пошти №3 у Харкові',
        id: 3
      }
    ],
    3: [
      {
        address: 'Відділення Укр Пошти №3 у Львові',
        id: 1
      },
      {
        address: 'Відділення Укр Пошти №3 у Львові',
        id: 2
      },
      {
        address: 'Відділення Укр Пошти №3 у Львові',
        id: 3
      }
    ]
  }
};

export const deliveryCourier: DeliveryType = {
  label: 'Кур’єр',
  value: EDelivery.COURIER,
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
  cityOptions: [
    {
      viewValue: 'Київ',
      id: 1
    },
    {
      viewValue: 'Харків',
      id: 2
    },
    {
      viewValue: 'Львів',
      id: 3
    }
  ],
  cityPlaces: {}
};
