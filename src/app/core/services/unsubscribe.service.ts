import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable()
export class UnsubscribeService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  public readonly takeUntilDestroy = <T>(
    origin: Observable<T>
  ): Observable<T> => origin.pipe(takeUntil(this.destroy$));

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
