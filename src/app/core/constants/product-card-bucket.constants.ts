import { IProductCardBucket } from '../interfaces/product-card-bucket.interface';

export const ProductCardBucketConstants: IProductCardBucket[] = [
  {
    id: 1,
    price: '23.01',
    productName: 'Томат черрі',
    img: '',
    weight: 3,
    wholesalePrice: '18.00',
    startWholesaleByKg: 10
  },
  {
    id: 2,
    price: '21.18',
    productName: 'Яблуко смачне',
    img: '',
    weight: 2,
    wholesalePrice: '15.00',
    startWholesaleByKg: 5
  },
  {
    id: 3,
    price: '27.61',
    productName: 'Вишня сочна',
    img: '',
    weight: 4,
    wholesalePrice: '20.00',
    startWholesaleByKg: 20
  }
];
