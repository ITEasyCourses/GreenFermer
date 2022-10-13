import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-purchase-total',
  templateUrl: './purchase-total.component.html',
  styleUrls: ['./purchase-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseTotalComponent implements OnInit {
  @Input() allProductPrice!: number;
  @Input() package!: number;
  @Input() delivery!: number;
  @Input() totalProduct!: number;

  @Output() addOrder: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelOrder: EventEmitter<any> = new EventEmitter<any>();

  public allPrice!: number;
  public totalProductText!: string;

  ngOnInit(): void {
    this.allSum();
    this.wordProduct();
  }

  public confirmOrder(): void {
    this.addOrder.emit();
  }

  public editOrder(): void {
    this.cancelOrder.emit();
  }

  private allSum(): void {
    this.allPrice =
      this.allProductPrice + (this.package || 0) + (this.delivery || 0);
  }

  private wordProduct(): void {
    if (
      this.totalProduct === 1 ||
      (this.totalProduct > 20 && (this.totalProduct - 1) % 10 === 0)
    ) {
      this.totalProductText = ' товар';
    } else if (
      this.totalProduct <= 4 ||
      (this.totalProduct > 21 && (this.totalProduct - 2) % 10 === 0) ||
      (this.totalProduct > 21 && (this.totalProduct - 3) % 10 === 0) ||
      (this.totalProduct > 21 && (this.totalProduct - 4) % 10 === 0)
    ) {
      this.totalProductText = ' товара';
    } else if (this.totalProduct <= 10) {
      this.totalProductText = ' товарів';
    } else this.totalProductText = ' товарів';
  }
}
