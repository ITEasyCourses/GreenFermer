import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SortTypeInterface } from '../../interfaces/sort-type.interface';

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSelectComponent {
  @Input() public sortType: FormControl = new FormControl('');
  @Input() public placeholder!: string;

  @Output() public sortString: EventEmitter<string> =
    new EventEmitter<string>();

  public mockSortTypes: SortTypeInterface[] = [
    { value: 'fruits', viewValue: 'Фруткты' },
    { value: 'vegetables', viewValue: 'Овощи' },
    { value: 'all', viewValue: 'Всё' }
  ];

  public sendSortType(): void {
    this.sortString.emit(this.sortType.value);
  }
}
