import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() counter = 0;
  @Output() cartEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  public cartEmit(): void {
    this.cartEmitter.emit();
  }
}
