import { EPayment } from '../enums/delivery-payment';
import { PaymentType } from '../interfaces/payment-type';

export const cash: PaymentType = {
  label: 'Готівка',
  value: EPayment.CASH,
  imgUrl: 'folder'
};

export const cart: PaymentType = {
  label: 'Картою на сайті',
  value: EPayment.CREDIT,
  imgUrl: 'credit-card'
};

export const gPay: PaymentType = {
  label: 'pay',
  value: EPayment.GPAY,
  imgUrl: '../../../../assets/images/icons/google%20logo.png'
};

export const aPay: PaymentType = {
  label: 'pay',
  value: EPayment.APAY,
  imgUrl: '../../../../assets/images/icons/apppay.png'
};
