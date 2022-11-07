export interface IProductCard {
  description: string;
  images: string[];
  isExist: boolean;
  isLiked: boolean;
  location: string;
  minAmount: string;
  optAmount: string;
  optPrice: string;
  owner: {
    avatar: string;
    description: string;
    name: string;
    rating: number;
  };
  periodGrow: string;
  price: string;
  rating: string;
  size: string;
  storageConditions: string;
  taste: string;
  timeStorage: string;
  title: string;
  typeId: string;
  typeText: string;
  id: string;
}
