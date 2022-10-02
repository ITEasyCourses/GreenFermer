import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { CATEGORIES, LABEL_CATALOG } from '../../constants/select.constants';
import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input() public label = 'label';
  @Input() public options: SortOption[] = [];

  @Output() public selectedOption: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit() {
    this.label = LABEL_CATALOG;
    this.options = CATEGORIES;
  }

  public selectOption(option: string): void {
    this.selectedOption.emit(option);
  }
}
