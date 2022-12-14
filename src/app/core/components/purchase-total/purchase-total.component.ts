import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-purchase-total',
  templateUrl: './purchase-total.component.html',
  styleUrls: ['./purchase-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseTotalComponent implements OnInit, OnChanges {
  @Input() allProductPrice!: number;
  @Input() oldProductPrice!: string;
  @Input() package!: number;
  @Input() delivery!: number;
  @Input() totalProduct!: number;

  @Output() addOrder: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelOrder: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelChanges: EventEmitter<any> = new EventEmitter<any>();

  public allPrice!: number;
  public totalProductText!: string;
  public btnEditOrder!: boolean;

  public ngOnInit(): void {
    this.allSum();
    this.wordProduct();
  }

  public ngOnChanges(): void {
    this.allSum();
    this.wordProduct();
  }

  public confirmOrder(): void {}

  public editOrder(): void {
    this.btnEditOrder = true;
    this.cancelOrder.emit();
  }

  public confirmChanges(): void {
    this.btnEditOrder = false;
    this.addOrder.emit();
  }

  public cancelChange(): void {
    this.btnEditOrder = false;
    this.cancelChanges.emit();
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
