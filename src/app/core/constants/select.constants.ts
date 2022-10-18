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

export const ORDER_PAGE_SELECT: SortOption[] = [
  { value: 'isDane', viewValue: 'Статус ОБР' },
  { value: '!isDane', viewValue: 'Статус ВИК' },
  { value: 'cityFromOder', viewValue: 'Місто А-Я' },
  { value: '!cityFromOder', viewValue: 'Місто Я-А' },
  { value: 'sumOderProducts', viewValue: 'Сума +' },
  { value: '!sumOderProducts', viewValue: 'Сума -' }
];
