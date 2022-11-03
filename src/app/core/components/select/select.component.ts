import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TrackByFunction
} from '@angular/core';

import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() public label = 'label';
  @Input() public options: SortOption[] = [];

  @Output() public selectedOption: EventEmitter<string> =
    new EventEmitter<string>();

  public trackByFn: TrackByFunction<SortOption> = (index, item) => item.value;

  public selectOption(option: string): void {
    this.selectedOption.emit(option);
  }
}
