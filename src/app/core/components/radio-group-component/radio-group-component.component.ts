import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-group-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radio-group-component.component.html',
  styleUrls: ['./radio-group-component.component.scss']
})
export class RadioGroupComponentComponent {
  @Input() textRadioBtn: string[] = ['собака', 'покупець', 'карта', 'кошелек'];
  @Input() positionHorizontal = false;
  @Output() radioGroupResult = new EventEmitter<string>();
  public defaultValue = this.textRadioBtn[0];
  public radioGroupControl: FormControl = new FormControl(
    `${this.defaultValue}`
  );

  public radioAnswer(): void {
    this.radioGroupResult.emit(this.radioGroupControl.value);
  }
}
