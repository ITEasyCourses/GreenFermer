import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { sortPurchaseOptions } from '../../../constants/sort-purchase-options';
import { SortOption } from '../../../interfaces/sort-option';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseModalComponent implements OnInit {
  @Input() myKg = 0;
  @Input() myPrice!: string;
  public mockSortTypes: SortOption[] = sortPurchaseOptions;

  constructor(private dialogRef: MatDialogRef<PurchaseModalComponent>) {}

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('purchase-modal');
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public countTotalWeight(event: number): void {
    if (event === 1) {
      this.myKg++;
    } else this.myKg--;
  }
}
