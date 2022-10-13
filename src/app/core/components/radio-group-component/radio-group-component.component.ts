import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SortOption } from '../../interfaces/sort-option';

@Component({
  selector: 'app-radio-group-component',
  templateUrl: './radio-group-component.component.html',
  styleUrls: ['./radio-group-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponentComponent implements OnInit {
  @Input() radioBtnItems!: SortOption[];
  @Input() positionHorizontal = false;

  @Output() radioGroupResult = new EventEmitter<string>();

  public radioGroupControl: FormControl = new FormControl('');
  public defaultValue = '';

  public radioAnswer(): void {
    this.radioGroupResult.emit(this.radioGroupControl.value);
  }

  ngOnInit(): void {
    this.defaultValue = this.radioBtnItems[0].value;
  }
}
