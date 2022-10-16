import {
  ChangeDetectionStrategy,
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
  @Input() counter = 6;
  @Input() color: CartColorsType = 'yellow';
  constructor(private bucketService: BucketService) {}

  ngOnInit(): void {
    this.bucketService.goodsCounterSubj.subscribe(
      (num) => (this.counter = num)
    );
  }
}
