import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private goodsCounterSubj: Subject<number> = new Subject<number>();
  private goodsCounter$: Observable<number> =
    this.goodsCounterSubj.asObservable();

  public get getGoodsCounter$(): Observable<number> {
    return this.goodsCounter$;
  }

  public setGoodsInLocalStorage(item: any): void {
    const currentSessionBucket = JSON.parse(
      localStorage.getItem('bucket') || ''
    );
    if (currentSessionBucket) {
      const setNewItemInBucket = [...currentSessionBucket, item];
      localStorage.setItem('bucket', JSON.stringify(setNewItemInBucket));
      this.setValueInGoodsCounter();
    }
  }

  private setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(
      JSON.parse(localStorage.getItem('bucket') || '').length
    );
  }
}
