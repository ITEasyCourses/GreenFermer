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
  private reRenderSubj: Subject<boolean> = new Subject<boolean>();

  public getGoodsCounter(): Observable<number> {
    return this.goodsCounterSubj.asObservable();
  }

  public reRender(): Observable<boolean> {
    return this.reRenderSubj.asObservable();
  }

  public addToBasket(card: IProductCardBucket): void {
    if (!this.purchaseModalProductCards.find((el) => el.id === card.id)) {
      this.purchaseModalProductCards.push(card);
      this.setGoodsInLocalStorage(card);
    }
  }

  public addProductCard(card: IProductCard): void {
    const cardForBucket = this.interfaceChange(card);
    this.addToBasket(cardForBucket);
  }

  public interfaceChange(card: IProductCard): IProductCardBucket {
    const cardForBucket: any = {
      id: card.id,
      productName: card.title,
      img: card.images[0],
      weight: Number(card.minAmount),
      startWholesaleByKg: Number(card.optAmount),
      minAmount: card.minAmount
    };

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

    if (cardForBucket.weight < Number(cardForBucket.startWholesaleByKg)) {
      cardForBucket.totalPrice =
        Number(cardForBucket.price) * cardForBucket.weight + '.00';
    } else {
      cardForBucket.totalPrice =
        Number(cardForBucket.wholesalePrice) * cardForBucket.weight + '.00';
    }

    return cardForBucket;
  }

  public isInBucket(cardId: string): boolean {
    return !!this.purchaseModalProductCards.find((el) => el.id === cardId);
  }

  public getBucketItemForPurchase(cardId: string): any {
    this.purchaseModalProductCards = this.getCurrentSessionBucket();
    return this.purchaseModalProductCards.find((el) => el.id === cardId);
  }

  public removeFromBucket(cardId: string): void {
    this.purchaseModalProductCards = this.purchaseModalProductCards.filter(
      (el) => el.id !== cardId
    );
    this.updateGoodsInLocalStorage(this.purchaseModalProductCards);
  }

  public setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(this.getCurrentSessionBucket().length);
  }

  public setReRender(): void {
    this.reRenderSubj.next(true);
  }

  public setGoodsInLocalStorage(item: IProductCardBucket): void {
    const setNewItemInBucket = [...this.getCurrentSessionBucket(), item];
    localStorage.setItem(
      ELocalStorage.BUCKET,
      JSON.stringify(setNewItemInBucket)
    );
    this.setValueInGoodsCounter();
  }

  public updateGoodsInLocalStorage(items: any[]): void {
    const setNewItemInBucket = [...items];
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
