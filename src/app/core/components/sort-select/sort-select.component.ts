import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss']
})
export class SortSelectComponent {
  @Input() public sortType: FormControl | any = new FormControl('');
  @Input() public textDecoration!: string;
  @Output() public sortString: EventEmitter<string> =
    new EventEmitter<string>();

  public mockSortTypes: any[] = [
    { value: 'fruits', viewValue: 'Фруткты' },
    { value: 'vegetables', viewValue: 'Овощи' },
    { value: 'all', viewValue: 'Всё' }
  ];

  public sendSortType(): void {
    this.sortString.emit(this.sortType.value);
  }
}
