import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private currentSessionBucket = localStorage.getItem('bucket')
    ? JSON.parse(localStorage.getItem('bucket') || '')
    : [];

  private goodsCounterSubj: Subject<number> = new Subject<number>();
  private goodsCounter$: Observable<number> =
    this.goodsCounterSubj.asObservable();

  public get getGoodsCounter$(): Observable<number> {
    return this.goodsCounter$;
  }

  public setGoodsInLocalStorage(item: any): void {
    const setNewItemInBucket = [...this.currentSessionBucket, item];
    localStorage.setItem('bucket', JSON.stringify(setNewItemInBucket));
    this.setValueInGoodsCounter();
  }

  private setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(this.currentSessionBucket.length);
  }
}
