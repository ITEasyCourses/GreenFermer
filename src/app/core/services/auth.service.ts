import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUserSubj: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getAuthUser(): Observable<any> {
    return this.authUserSubj.asObservable();
  }

  public setUser(user: any): void {
    this.authUserSubj.next(user);
  }

  public getUser(): any {
    return this.authUserSubj.getValue();
  }
}
