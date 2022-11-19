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
  @Input() color: CartColorsType = 'yellow';

  public counter = this.bucketService.getGoodsCounter();

  constructor(private bucketService: BucketService) {}

  public ngOnInit(): void {
    this.bucketService.setValueInGoodsCounter();
  }
}
