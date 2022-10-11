import { PaymentType } from '../interfaces/paymentType';

export const cash: PaymentType = {
  label: 'Готівка',
  value: 'cash',
  imgUrl: 'folder'
};

export const cart: PaymentType = {
  label: 'Картою на сайті',
  value: 'credit',
  imgUrl: 'credit-card'
};

export const gPay: PaymentType = {
  label: 'pay',
  value: 'appay',
  imgUrl: '../../../../assets/images/icons/apppay.png'
};

export const aPay: PaymentType = {
  label: 'pay',
  value: 'gpay',
  imgUrl: '../../../../assets/images/icons/google%20logo.png'
};
