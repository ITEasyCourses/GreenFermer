import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  public goodsCounterSubj: Subject<number> = new Subject<number>();

  public setGoodsInLocalStorage(item: any): void {
    const currentSession = JSON.parse(localStorage.getItem('session') || '');
    const newItemInBucket = {
      ...currentSession,
      bucket: [...currentSession.bucket, item]
    };
    localStorage.setItem('session', JSON.stringify(newItemInBucket));
    this.setValueInGoodsCounter();
  }

  private setValueInGoodsCounter(): void {
    this.goodsCounterSubj.next(
      JSON.parse(localStorage.getItem('session') || '').bucket.length
    );
  }
}
