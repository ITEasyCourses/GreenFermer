import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ELocalStorage } from '../enums/local-storage';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private goodsCounterSubj: Subject<number> = new Subject<number>();

  public getGoodsCounter(): Observable<number> {
    return this.goodsCounterSubj.asObservable();
  }

  // TODO добавить типизацию, когда она будет доступна
  public setGoodsInLocalStorage(item: any): void {
    const setNewItemInBucket = [...this.getCurrentSessionBucket(), item];
    localStorage.setItem(
      ELocalStorage.BUCKET,
      JSON.stringify(setNewItemInBucket)
    );
    this.setValueInGoodsCounter();
  }

  // TODO добавить типизацию, когда она будет доступна
  private getCurrentSessionBucket(): any[] {
    return localStorage.getItem(ELocalStorage.BUCKET)
      ? JSON.parse(localStorage.getItem(ELocalStorage.BUCKET) || '')
      : [];
  }

  private setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(this.getCurrentSessionBucket().length);
  }
}
