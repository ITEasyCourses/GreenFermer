import { SortOption } from '../interfaces/sort-option';

export const CATEGORIES: SortOption[] = [
  { value: 'fruits', viewValue: 'Фрукти' },
  {
    value: 'beans',
    viewValue: 'Бобові'
  },
  { value: 'berries', viewValue: 'Ягоди' },
  { value: 'cheeses', viewValue: 'Сири' },
  { value: 'exotics', viewValue: 'Екзотика' },
  { value: 'fish', viewValue: 'Риба' },
  { value: 'green', viewValue: 'Зелень' },
  { value: 'honey', viewValue: 'Мед' },
  { value: 'mushrooms', viewValue: 'Гриби' },
  { value: 'nuts', viewValue: 'Горіхи' },
  { value: 'meat', viewValue: "М'ясо" },
  { value: 'vegetables', viewValue: 'Овочі' }
];

export const LABEL_SELECT = {
  CATALOG: 'Каталог',
  MENU: 'Меню'
};
