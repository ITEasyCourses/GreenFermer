import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SortSelectComponent } from './sort-select.component';

@NgModule({
  declarations: [SortSelectComponent],
  exports: [SortSelectComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SortSelectModule {}
