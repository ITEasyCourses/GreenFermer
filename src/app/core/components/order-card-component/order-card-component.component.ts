import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IOrderCardFields } from '../../interfaces/i-order-card-fields';

@Component({
  selector: 'app-order-card-component',
  templateUrl: './order-card-component.component.html',
  styleUrls: ['./order-card-component.component.scss']
})
export class OrderCardComponentComponent {
  @Input() public ordersCards!: IOrderCardFields;

  @Output() monitoringButtonEvent!: EventEmitter<void>;
  @Output() connectionWithSellerEvent!: EventEmitter<void>;
  @Output() deleteOrderEvent!: EventEmitter<void>;
  @Output() leftReviewEvent!: EventEmitter<void>;
  @Output() watchingDetailsEvent!: EventEmitter<void>;

  public monitoringButton(): void {
    this.monitoringButtonEvent.emit();
  }

  public connectionWithSeller(): void {
    this.connectionWithSellerEvent.emit();
  }

  public deleteOrder(): void {
    this.deleteOrderEvent.emit();
  }

  public leftReview(): void {
    this.leftReviewEvent.emit();
  }

  public watchingDetails(): void {
    this.watchingDetailsEvent.emit();
  }
}
