import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
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

  public radioGroupControl: FormControl = new FormControl('');

  public radioAnswer(): void {


    this.radioGroupResult.emit(this.radioGroupControl.value);
  }
}
