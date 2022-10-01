import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchCity } from '../../interfaces/search-city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() public citySort: FormControl = new FormControl();
  @Input() public searchProducts: FormControl = new FormControl();

  public sortCity: SearchCity[] = [
    { value: 'kharkov', viewValue: 'Харків' },
    { value: 'kiev', viewValue: 'Київ' },
    { value: 'odessa', viewValue: 'Одеса' },
    { value: 'lviv', viewValue: 'Львів' },
    { value: 'chernigov', viewValue: 'Чернігів' },
    { value: 'dnepr', viewValue: 'Дніпро' },
    { value: 'vinnitsya', viewValue: 'Вінниця' },
    { value: 'summi', viewValue: 'Суми' },
    { value: 'kherson', viewValue: 'Херсон' },
    { value: 'chernovtsi', viewValue: 'Чернівці' },
    { value: 'rovno', viewValue: 'Рівне' }
  ];
}
