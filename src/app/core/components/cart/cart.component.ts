import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { BucketService } from '../../services/bucket.service';
import { CartColorsType } from '../../types/application-types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  @Input() color: CartColorsType = 'yellow';

  public counter = 0;

  constructor(
    private bucketService: BucketService,
    private ref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.updateCounterBySubscribe();
    this.bucketService.setValueInGoodsCounter();
  }

  private updateCounterBySubscribe(): void {
    this.bucketService.getGoodsCounter().subscribe((num) => {
      this.counter = num;
      this.ref.detectChanges();
    });
  }
}
