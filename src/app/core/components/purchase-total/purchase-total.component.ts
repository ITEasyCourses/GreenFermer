import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-total',
  templateUrl: './purchase-total.component.html',
  styleUrls: ['./purchase-total.component.scss']
})
export class PurchaseTotalComponent implements OnInit {
  @Input() allProductPrice!: number;
  @Input() package!: number;
  @Input() delivery!: number;
  @Input() totalProduct = 1;
  public allPrice!: number;
  public totalProductText!: string;

  constructor() {}

  ngOnInit(): void {
    this.allPrice =
      this.allProductPrice + (this.package || 0) + (this.delivery || 0);
  }

  public product(): void {
    if (
      this.totalProduct === 1 ||
      (this.totalProduct > 20 && (this.totalProduct - 1) % 10 === 0)
    ) {
      this.totalProductText = 'товар';
    }
  }
}

// totalProductText = totalProduct =;
//     if (totalProduct === 1 || totalProduct > 20 && (totalProduct - 1) %10 === 0) {
//         (`${totalProduct} товар`)
//     } else if (totalProduct <= 4 || totalProduct > 21 && (totalProduct - 2) %10 === 0 ||
//       totalProduct > 21 && (totalProduct -3) %10 === 0 || totalProduct > 21 && (totalProduct - 4) %10 === 0) {
//      (`${totalProduct} товара`)
//     }
//     else if (totalProduct <= 10) {
//         ('${totalProduct} товаров')
//     }
//     else
//         (`${totalProduct} товаров`)
