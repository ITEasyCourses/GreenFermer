import { IOrderCardFields } from '../interfaces/i-order-card-fields';

export const ORDERS: IOrderCardFields[] = [
  {
    isDane: true,
    ordersNumber: 123143541,

    dayOfOder: 'Сьогодні',
    cityFromOder: 'Харків',
    cityToOder: 'Київ',
    id: 1,
    orderAddedProducts: [
      {
        productName: 'яблука мачені',
        productPrice: 15,
        productAmount: 12,
        productSum: 1300
      },
      {
        productName: 'груші',
        productPrice: 123,
        productAmount: 6227,
        productSum: 13008789
      },
      {
        productName: 'картопля',
        productPrice: 5098,
        productAmount: 824476,
        productSum: 434589932
      }
    ],
    sumOderProducts: 8765234567
  },
  {
    isDane: false,
    ordersNumber: 123143542,
    dayOfOder: 'Сьогодні',
    cityFromOder: 'Львів',
    cityToOder: 'Чернівці',
    id: 2,
    orderAddedProducts: [
      {
        productName: 'Вишня смачна',
        productPrice: 4,
        productAmount: 12,
        productSum: 1234
      },
      {
        productName: 'полуниця',
        productPrice: 120,
        productAmount: 100,
        productSum: 12000
      },
      {
        productName: 'цибуля Херсоньска',
        productPrice: 45,
        productAmount: 1000,
        productSum: 45000
      }
    ],
    sumOderProducts: 532312389
  },
  {
    isDane: true,
    ordersNumber: 123143543,
    dayOfOder: 'Сьогодні',
    cityFromOder: 'Маріуполь',
    cityToOder: 'Дніпро',
    id: 3,
    orderAddedProducts: [
      {
        productName: 'маліна',
        productPrice: 98,
        productAmount: 52,
        productSum: 42121
      },
      {
        productName: 'кавуни',
        productPrice: 76,
        productAmount: 12300,
        productSum: 1300437
      }
    ],
    sumOderProducts: 1446788213
  }
];
