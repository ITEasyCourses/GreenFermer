import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchCity } from '../../interfaces/search-city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() public citySort: FormControl = new FormControl('');
  @Input() public searchProducts: FormControl = new FormControl('');
  @Input() public placeholder!: string;

  @Output() public sortUkraine: EventEmitter<string> =
    new EventEmitter<string>();

  public sortCity: SearchCity[] = [
    { value: 'ukraine', viewValue: 'Вся Україна' },
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

  public ngOnInit(): void {
    this.citySort.setValue(this.sortCity[0].viewValue);
  }

  public sendSortType(): void {
    this.sortUkraine.emit(this.citySort.value);
  }

  productSearch() {}
}
