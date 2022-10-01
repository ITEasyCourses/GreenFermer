import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() buttonText!: string;
  @Input() buttonNoColor = false;
  @Input() isDisabled = false;
  @Input() addIcon = false;
}
