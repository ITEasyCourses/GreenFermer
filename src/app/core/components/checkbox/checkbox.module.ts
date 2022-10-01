import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  imports: [CommonModule, MatCheckboxModule]
})
export class CheckboxModule {}
