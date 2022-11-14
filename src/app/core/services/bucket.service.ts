import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ELocalStorage } from '../enums/local-storage';
import { IProductCard } from '../interfaces/i-product-card';
import { IProductCardBucket } from '../interfaces/product-card-bucket.interface';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private purchaseModalProductCards: IProductCardBucket[] =
    this.getCurrentSessionBucket();

  private goodsCounterSubj: Subject<number> = new Subject<number>();
  private goodsCounter$ = this.goodsCounterSubj.asObservable();

  private testSubj: Subject<boolean> = new Subject<boolean>();
  private testFlag$ = this.testSubj.asObservable();

  public getGoodsCounter(): Observable<number> {
    return this.goodsCounter$;
  }

  public addToBasket(card: IProductCardBucket): void {
    if (!this.purchaseModalProductCards.find((el) => el.id === card.id)) {
      this.purchaseModalProductCards.push(card);
      this.setGoodsInLocalStorage(card);
    }
  }

  public addCardFromPurchase(card: IProductCard): void {
    const cardForBucket: any = {};
    cardForBucket.id = card.id;
    cardForBucket.productName = card.title;
    cardForBucket.img = card.images[0];
    if ([...card.price].find((el) => el === '.')) {
      cardForBucket.price = card.price;
    } else {
      cardForBucket.price = card.price + '.00';
    }
    if ([...card.optPrice].find((el) => el === '.')) {
      cardForBucket.wholesalePrice = card.optPrice;
    } else {
      cardForBucket.wholesalePrice = card.optPrice + '.00';
    }
    cardForBucket.weight = Number(card.minAmount);
    cardForBucket.startWholesaleByKg = Number(card.optAmount);
    cardForBucket.totalPrice = '00.00';
    cardForBucket.minAmount = card.minAmount;
    this.addToBasket(cardForBucket);
  }

  public isInBucket(cardId: string) {
    return !!this.purchaseModalProductCards.find((el) => el.id === cardId);
  }

  public isInBucketTest(cardId: string) {
    const test = this.isInBucket(cardId);
    this.testSubj.next(test);
  }

  public testFlag() {
    return this.testFlag$;
  }

  public removeFromBasket(cardId: string): void {
    this.purchaseModalProductCards = this.purchaseModalProductCards.filter(
      (el) => el.id !== cardId
    );
    this.removeGoodsFromLocalStorage();
  }

  public updateProductCards(prod: IProductCardBucket) {
    this.purchaseModalProductCards.map((el: IProductCardBucket) => {
      if (el.id === prod.id) {
        el = prod;
      }
    });
  }

  public setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(this.getCurrentSessionBucket().length);
  }

  public setGoodsInLocalStorage(item: IProductCardBucket): void {
    const setNewItemInBucket = [...this.getCurrentSessionBucket(), item];
    localStorage.setItem(
      ELocalStorage.BUCKET,
      JSON.stringify(setNewItemInBucket)
    );
    this.setValueInGoodsCounter();
  }

  public removeGoodsFromLocalStorage(): void {
    // const setNewItemInBucket = [...this.purchaseModalProductCards];
    const setNewItemInBucket = [...this.purchaseModalProductCards];
    localStorage.setItem(
      ELocalStorage.BUCKET,
      JSON.stringify(setNewItemInBucket)
    );
    this.setValueInGoodsCounter();
  }

  public getCurrentSessionBucket(): IProductCardBucket[] {
    return localStorage.getItem(ELocalStorage.BUCKET)
      ? JSON.parse(localStorage.getItem(ELocalStorage.BUCKET) || '')
      : [];
  }
}
