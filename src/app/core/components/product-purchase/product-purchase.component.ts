import { Component } from '@angular/core';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss']
})
export class ProductPurchaseComponent {
  public cash = false;
  public card = false;
  public product: any = [
    {
      cost: 23,
      optcost: 19,
      optvalue: 20,
      minvalue: 3,
      all: 69,
      kolvo: 3
    }
  ];

  constructor() {}

  minusproduct() {
    if (this.product[0].kolvo > this.product[0].minvalue) {
      this.product[0].kolvo = this.product[0].kolvo - 1;
      this.product[0].all = this.product[0].kolvo * this.product[0].cost;
    }
  }

  plusproduct() {
    this.product[0].kolvo = this.product[0].kolvo + 1;
    this.product[0].all = this.product[0].kolvo * this.product[0].cost;
  }

  cardOrCash() {
    if (this.cash === false) {
      this.card = !this.card;
    } else {
      this.cash = !this.cash;
      this.card = !this.card;
    }
  }

  cashOrCard() {
    if (this.card === false) {
      this.cash = !this.cash;
    } else {
      this.card = !this.card;
      this.cash = !this.cash;
    }
  }
}
