import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TrackByFunction
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSelectComponent {
  @Input() public sortControl: FormControl = new FormControl('');
  @Input() public placeholder!: string;
  @Input() public placeholderGray!: string;
  @Input() public selectItems!: SortOption[];

  @Output() public sortString: EventEmitter<string> =
    new EventEmitter<string>();

  @Output() public sortViewValue: EventEmitter<string> =
    new EventEmitter<string>();

  public trackByFn: TrackByFunction<SortOption> = (index, item) => item.value;

  public sendSortType(): void {
    this.sortString.emit(this.sortControl.value);
  }
}
