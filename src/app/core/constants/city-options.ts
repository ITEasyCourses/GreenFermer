import { SelectOption } from '../interfaces/delivery-type';

export const cityOptions: SelectOption[] = [
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
];

export const cityPlaces: Record<number | string, SelectOption[]> = {
  1: [
    {
      viewValue: 'Наша адресса у Київі №1',
      id: 1
    },
    {
      viewValue: 'Наша адресса  у Київі №2',
      id: 2
    },
    {
      viewValue: 'Наша адресса  у Київі №3',
      id: 3
    }
  ],
  2: [
    {
      viewValue: 'Наша адресса у Харкові №1',
      id: 1
    },
    {
      viewValue: 'Наша адресса  у Харкові №2',
      id: 2
    },
    {
      viewValue: 'Наша адресса  у Харкові №3',
      id: 3
    }
  ],
  3: [
    {
      viewValue: 'Наша адресса у Львові №1',
      id: 1
    },
    {
      viewValue: 'Наша адресса  у Львові №2',
      id: 2
    },
    {
      viewValue: 'Наша адресса  у Львові №3',
      id: 3
    }
  ]
};

export const newPostPlaces: Record<number | string, SelectOption[]> = {
  1: [
    {
      viewValue: 'Відділення нової пошти у Київі №1',
      id: 1
    },
    {
      viewValue: 'Відділення нової пошти у Київі №2',
      id: 2
    },
    {
      viewValue: 'Відділення нової пошти у Київі №3',
      id: 3
    }
  ],
  2: [
    {
      viewValue: 'Відділення нової пошти  у Харкові №1',
      id: 1
    },
    {
      viewValue: 'Відділення нової пошти  у Харкові №2',
      id: 2
    },
    {
      viewValue: 'Відділення нової пошти  у Харкові №3',
      id: 3
    }
  ],
  3: [
    {
      viewValue: 'Відділення нової пошти  у Львові №1',
      id: 1
    },
    {
      viewValue: 'Відділення нової пошти  у Львові №2',
      id: 2
    },
    {
      viewValue: 'Відділення нової пошти  у Львові №3',
      id: 3
    }
  ]
};

export const ukrPostPlaces: Record<number | string, SelectOption[]> = {
  1: [
    {
      viewValue: 'Відділення укр пошти у Київі №1',
      id: 1
    },
    {
      viewValue: 'Відділення укр пошти у Київі №2',
      id: 2
    },
    {
      viewValue: 'Відділення укр пошти у Київі №3',
      id: 3
    }
  ],
  2: [
    {
      viewValue: 'Відділення укрпошти  у Харкові №1',
      id: 1
    },
    {
      viewValue: 'Відділення укр пошти  у Харкові №2',
      id: 2
    },
    {
      viewValue: 'Відділення укр пошти  у Харкові №3',
      id: 3
    }
  ],
  3: [
    {
      viewValue: 'Відділення укр пошти  у Львові №1',
      id: 1
    },
    {
      viewValue: 'Відділення укр пошти  у Львові №2',
      id: 2
    },
    {
      viewValue: 'Відділення укр пошти  у Львові №3',
      id: 3
    }
  ]
};
