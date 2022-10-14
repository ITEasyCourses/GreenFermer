import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit {
  @Input() public value!: string;

  ngOnInit(): void {
    this.checkedControl();
  }

  public checkedControl(): boolean {
    return this.value === 'cash' || this.value === 'self';
  }
}
