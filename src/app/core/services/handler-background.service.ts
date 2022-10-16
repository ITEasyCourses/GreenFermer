import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerBackgroundService {
  public subj: Subject<string> = new Subject<string>();
  private img: any = {
    fruits: '../../../assets/images/Category-page/fruits.png',
    green: '../../../assets/images/Category-page/green.jpg',
    beans: '../../../assets/images/Category-page/beans.jpg'
  };

  public setImg(value: string): void {
    this.subj.next(this.img[value]);
  }
}
