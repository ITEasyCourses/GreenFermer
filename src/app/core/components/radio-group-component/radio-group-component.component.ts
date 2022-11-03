import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  TrackByFunction
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-radio-group-component',
  templateUrl: './radio-group-component.component.html',
  styleUrls: ['./radio-group-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponentComponent {
  @Input() radioBtnItems!: SortOption[];
  @Input() positionHorizontal = false;
  @Output() radioGroupResult = new EventEmitter<string>();
  @Input() radioGroupControl: FormControl = new FormControl(``);

  public trackByFn: TrackByFunction<SortOption> = (index, item) => item.value;

  public radioAnswer(): void {
    this.radioGroupResult.emit(this.radioGroupControl.value);
  }
}
