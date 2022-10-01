import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-group-component',
  templateUrl: './radio-group-component.component.html',
  styleUrls: ['./radio-group-component.component.scss']
})
export class RadioGroupComponentComponent {
  @Input() radioText1 = '';
  @Input() radioText2 = '';
  @Input() position = 'Horizontal';
  @Output() radioGroupResult = new EventEmitter<string>();
  constructor() {}

  public radioAnswer(event: MatRadioChange) {
    if (+event.value === 1) {
      this.radioGroupResult.emit(this.radioText1);
    } else if (+event.value === 2) {
      this.radioGroupResult.emit(this.radioText2);
    }
  }
}
