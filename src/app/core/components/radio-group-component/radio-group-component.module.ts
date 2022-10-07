import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { SortSelectModule } from '../sort-select/sort-select.module';

import { RadioGroupComponentComponent } from './radio-group-component.component';

@NgModule({
  declarations: [RadioGroupComponentComponent],
  exports: [RadioGroupComponentComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule, SortSelectModule]
})
export class RadioGroupComponentModule {}
