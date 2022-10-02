import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-radio-group-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radio-group-component.component.html',
  styleUrls: ['./radio-group-component.component.scss']
})
export class RadioGroupComponentComponent {
  @Input() textRadioBtn: string[] = ['фермер', 'покупець', 'карта', 'кошелек'];
  @Input() positionHorizontal = false;
  @Output() radioGroupResult = new EventEmitter<any>();

  public radioAnswer(event: string): void {
    this.radioGroupResult.emit(event);
  }
}
