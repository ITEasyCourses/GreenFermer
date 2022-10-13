import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InputType } from '../../types/application-types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() inputFormControl: FormControl = new FormControl('');
  @Input() type: InputType = 'text';
  @Input() inputLabel = '';
  @Input() placeholder!: string;
}
