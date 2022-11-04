import { EPayment } from '../enums/delivery-payment';
import { PaymentType } from '../interfaces/payment-type';

export const cash: PaymentType = {
  label: 'Готівка',
  value: EPayment.CASH,
  imgUrl: '../../../../assets/sprites/sprite-multicolor.svg#cash',
  width: '31px',
  height: '30px'
};

export const cart: PaymentType = {
  label: 'Картою на сайті',
  value: EPayment.CREDIT,
  imgUrl: '../../../../assets/sprites/sprite-multicolor.svg#credit-card',
  width: '32px',
  height: '26px'
};

export const gPay: PaymentType = {
  label: 'pay',
  value: EPayment.GPAY,
  imgUrl: '../../../../assets/sprites/sprite-multicolor.svg#google',
  width: '21px',
  height: '21px'
};

export const aPay: PaymentType = {
  label: 'pay',
  value: EPayment.APAY,
  imgUrl: '../../../../assets/sprites/sprite-multicolor.svg#apple',
  width: '20px',
  height: '24px'
};
