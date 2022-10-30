import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';

import { SelectOption } from '../../interfaces/delivery-type';

@Component({
  selector: 'app-select-delivery',
  templateUrl: './select-delivery.component.html',
  styleUrls: ['./select-delivery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDeliveryComponent {
  @Input() public label!: string;
  @Input() public options!: SelectOption[];
  @Input() public deliveryStyle!: boolean;

  @Output() public selectedOption: EventEmitter<SelectOption> =
    new EventEmitter<SelectOption>();

  public openFlag = false;

  public selectOption(option: SelectOption): void {
    this.selectedOption.emit(option);
  }

  public open(): void {
    this.openFlag = !this.openFlag;
  }
}
